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
var CreateJourneyPathParams = /** @class */ (function (_super) {
    __extends(CreateJourneyPathParams, _super);
    function CreateJourneyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], CreateJourneyPathParams.prototype, "applicationId", void 0);
    return CreateJourneyPathParams;
}(SpeakeasyBase));
export { CreateJourneyPathParams };
var CreateJourneyHeaders = /** @class */ (function (_super) {
    __extends(CreateJourneyHeaders, _super);
    function CreateJourneyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateJourneyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateJourneyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateJourneyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateJourneyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateJourneyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateJourneyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateJourneyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateJourneyHeaders;
}(SpeakeasyBase));
export { CreateJourneyHeaders };
// CreateJourneyRequestBodyWriteJourneyRequest
/**
 * Specifies the configuration and other settings for a journey.
**/
var CreateJourneyRequestBodyWriteJourneyRequest = /** @class */ (function (_super) {
    __extends(CreateJourneyRequestBodyWriteJourneyRequest, _super);
    function CreateJourneyRequestBodyWriteJourneyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Activities", elemType: shared.Activity }),
        __metadata("design:type", Map)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", String)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Limits" }),
        __metadata("design:type", shared.JourneyLimits)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "limits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalTime" }),
        __metadata("design:type", Boolean)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "localTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuietTime" }),
        __metadata("design:type", shared.QuietTime)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "quietTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefreshFrequency" }),
        __metadata("design:type", String)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "refreshFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RefreshOnSegmentUpdate" }),
        __metadata("design:type", Boolean)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "refreshOnSegmentUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", shared.JourneySchedule)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartActivity" }),
        __metadata("design:type", String)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "startActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartCondition" }),
        __metadata("design:type", shared.StartCondition)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "startCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WaitForQuietTime" }),
        __metadata("design:type", Boolean)
    ], CreateJourneyRequestBodyWriteJourneyRequest.prototype, "waitForQuietTime", void 0);
    return CreateJourneyRequestBodyWriteJourneyRequest;
}(SpeakeasyBase));
export { CreateJourneyRequestBodyWriteJourneyRequest };
var CreateJourneyRequestBody = /** @class */ (function (_super) {
    __extends(CreateJourneyRequestBody, _super);
    function CreateJourneyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WriteJourneyRequest" }),
        __metadata("design:type", CreateJourneyRequestBodyWriteJourneyRequest)
    ], CreateJourneyRequestBody.prototype, "writeJourneyRequest", void 0);
    return CreateJourneyRequestBody;
}(SpeakeasyBase));
export { CreateJourneyRequestBody };
var CreateJourneyRequest = /** @class */ (function (_super) {
    __extends(CreateJourneyRequest, _super);
    function CreateJourneyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateJourneyPathParams)
    ], CreateJourneyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateJourneyHeaders)
    ], CreateJourneyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateJourneyRequestBody)
    ], CreateJourneyRequest.prototype, "request", void 0);
    return CreateJourneyRequest;
}(SpeakeasyBase));
export { CreateJourneyRequest };
var CreateJourneyResponse = /** @class */ (function (_super) {
    __extends(CreateJourneyResponse, _super);
    function CreateJourneyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJourneyResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateJourneyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateJourneyResponse)
    ], CreateJourneyResponse.prototype, "createJourneyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJourneyResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJourneyResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJourneyResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJourneyResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJourneyResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateJourneyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJourneyResponse.prototype, "tooManyRequestsException", void 0);
    return CreateJourneyResponse;
}(SpeakeasyBase));
export { CreateJourneyResponse };
