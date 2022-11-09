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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var StartIncidentHeaders = /** @class */ (function (_super) {
    __extends(StartIncidentHeaders, _super);
    function StartIncidentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartIncidentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartIncidentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartIncidentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartIncidentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartIncidentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartIncidentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartIncidentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartIncidentHeaders;
}(SpeakeasyBase));
export { StartIncidentHeaders };
// StartIncidentRequestBodyTriggerDetails
/**
 * Details about what caused the incident to be created in Incident Manager.
**/
var StartIncidentRequestBodyTriggerDetails = /** @class */ (function (_super) {
    __extends(StartIncidentRequestBodyTriggerDetails, _super);
    function StartIncidentRequestBodyTriggerDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=rawData" }),
        __metadata("design:type", String)
    ], StartIncidentRequestBodyTriggerDetails.prototype, "rawData", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], StartIncidentRequestBodyTriggerDetails.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], StartIncidentRequestBodyTriggerDetails.prototype, "timestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=triggerArn" }),
        __metadata("design:type", String)
    ], StartIncidentRequestBodyTriggerDetails.prototype, "triggerArn", void 0);
    return StartIncidentRequestBodyTriggerDetails;
}(SpeakeasyBase));
export { StartIncidentRequestBodyTriggerDetails };
var StartIncidentRequestBody = /** @class */ (function (_super) {
    __extends(StartIncidentRequestBody, _super);
    function StartIncidentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], StartIncidentRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=impact" }),
        __metadata("design:type", Number)
    ], StartIncidentRequestBody.prototype, "impact", void 0);
    __decorate([
        Metadata({ data: "json, name=relatedItems", elemType: shared.RelatedItem }),
        __metadata("design:type", Array)
    ], StartIncidentRequestBody.prototype, "relatedItems", void 0);
    __decorate([
        Metadata({ data: "json, name=responsePlanArn" }),
        __metadata("design:type", String)
    ], StartIncidentRequestBody.prototype, "responsePlanArn", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], StartIncidentRequestBody.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=triggerDetails" }),
        __metadata("design:type", StartIncidentRequestBodyTriggerDetails)
    ], StartIncidentRequestBody.prototype, "triggerDetails", void 0);
    return StartIncidentRequestBody;
}(SpeakeasyBase));
export { StartIncidentRequestBody };
var StartIncidentRequest = /** @class */ (function (_super) {
    __extends(StartIncidentRequest, _super);
    function StartIncidentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StartIncidentHeaders)
    ], StartIncidentRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartIncidentRequestBody)
    ], StartIncidentRequest.prototype, "request", void 0);
    return StartIncidentRequest;
}(SpeakeasyBase));
export { StartIncidentRequest };
var StartIncidentResponse = /** @class */ (function (_super) {
    __extends(StartIncidentResponse, _super);
    function StartIncidentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartIncidentResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartIncidentResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StartIncidentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartIncidentResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartIncidentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StartIncidentOutput)
    ], StartIncidentResponse.prototype, "startIncidentOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StartIncidentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartIncidentResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartIncidentResponse.prototype, "validationException", void 0);
    return StartIncidentResponse;
}(SpeakeasyBase));
export { StartIncidentResponse };
