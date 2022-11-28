var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var UpdateJourneyPathParams = /** @class */ (function (_super) {
    __extends(UpdateJourneyPathParams, _super);
    function UpdateJourneyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateJourneyPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=journey-id" }),
        __metadata("design:type", String)
    ], UpdateJourneyPathParams.prototype, "journeyId", void 0);
    return UpdateJourneyPathParams;
}(SpeakeasyBase));
export { UpdateJourneyPathParams };
var UpdateJourneyHeaders = /** @class */ (function (_super) {
    __extends(UpdateJourneyHeaders, _super);
    function UpdateJourneyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateJourneyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateJourneyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateJourneyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateJourneyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateJourneyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateJourneyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateJourneyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateJourneyHeaders;
}(SpeakeasyBase));
export { UpdateJourneyHeaders };
// UpdateJourneyRequestBodyWriteJourneyRequest
/**
 * Specifies the configuration and other settings for a journey.
**/
var UpdateJourneyRequestBodyWriteJourneyRequest = /** @class */ (function (_super) {
    __extends(UpdateJourneyRequestBodyWriteJourneyRequest, _super);
    function UpdateJourneyRequestBodyWriteJourneyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Activities", elemType: shared.Activity }),
        __metadata("design:type", Map)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", String)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Limits" }),
        __metadata("design:type", shared.JourneyLimits)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "limits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalTime" }),
        __metadata("design:type", Boolean)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "localTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuietTime" }),
        __metadata("design:type", shared.QuietTime)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "quietTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefreshFrequency" }),
        __metadata("design:type", String)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "refreshFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefreshOnSegmentUpdate" }),
        __metadata("design:type", Boolean)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "refreshOnSegmentUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", shared.JourneySchedule)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartActivity" }),
        __metadata("design:type", String)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "startActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartCondition" }),
        __metadata("design:type", shared.StartCondition)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "startCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WaitForQuietTime" }),
        __metadata("design:type", Boolean)
    ], UpdateJourneyRequestBodyWriteJourneyRequest.prototype, "waitForQuietTime", void 0);
    return UpdateJourneyRequestBodyWriteJourneyRequest;
}(SpeakeasyBase));
export { UpdateJourneyRequestBodyWriteJourneyRequest };
var UpdateJourneyRequestBody = /** @class */ (function (_super) {
    __extends(UpdateJourneyRequestBody, _super);
    function UpdateJourneyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WriteJourneyRequest" }),
        __metadata("design:type", UpdateJourneyRequestBodyWriteJourneyRequest)
    ], UpdateJourneyRequestBody.prototype, "writeJourneyRequest", void 0);
    return UpdateJourneyRequestBody;
}(SpeakeasyBase));
export { UpdateJourneyRequestBody };
var UpdateJourneyRequest = /** @class */ (function (_super) {
    __extends(UpdateJourneyRequest, _super);
    function UpdateJourneyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateJourneyPathParams)
    ], UpdateJourneyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateJourneyHeaders)
    ], UpdateJourneyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateJourneyRequestBody)
    ], UpdateJourneyRequest.prototype, "request", void 0);
    return UpdateJourneyRequest;
}(SpeakeasyBase));
export { UpdateJourneyRequest };
var UpdateJourneyResponse = /** @class */ (function (_super) {
    __extends(UpdateJourneyResponse, _super);
    function UpdateJourneyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJourneyResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJourneyResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateJourneyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJourneyResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJourneyResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJourneyResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJourneyResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJourneyResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateJourneyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJourneyResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateJourneyResponse)
    ], UpdateJourneyResponse.prototype, "updateJourneyResponse", void 0);
    return UpdateJourneyResponse;
}(SpeakeasyBase));
export { UpdateJourneyResponse };
