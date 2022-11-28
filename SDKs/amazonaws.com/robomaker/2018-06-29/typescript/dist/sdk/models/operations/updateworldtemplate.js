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
var UpdateWorldTemplateHeaders = /** @class */ (function (_super) {
    __extends(UpdateWorldTemplateHeaders, _super);
    function UpdateWorldTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateWorldTemplateHeaders;
}(SpeakeasyBase));
export { UpdateWorldTemplateHeaders };
// UpdateWorldTemplateRequestBodyTemplateLocation
/**
 * Information about a template location.
**/
var UpdateWorldTemplateRequestBodyTemplateLocation = /** @class */ (function (_super) {
    __extends(UpdateWorldTemplateRequestBodyTemplateLocation, _super);
    function UpdateWorldTemplateRequestBodyTemplateLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Bucket" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateRequestBodyTemplateLocation.prototype, "s3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Key" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateRequestBodyTemplateLocation.prototype, "s3Key", void 0);
    return UpdateWorldTemplateRequestBodyTemplateLocation;
}(SpeakeasyBase));
export { UpdateWorldTemplateRequestBodyTemplateLocation };
var UpdateWorldTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateWorldTemplateRequestBody, _super);
    function UpdateWorldTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateRequestBody.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateBody" }),
        __metadata("design:type", String)
    ], UpdateWorldTemplateRequestBody.prototype, "templateBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateLocation" }),
        __metadata("design:type", UpdateWorldTemplateRequestBodyTemplateLocation)
    ], UpdateWorldTemplateRequestBody.prototype, "templateLocation", void 0);
    return UpdateWorldTemplateRequestBody;
}(SpeakeasyBase));
export { UpdateWorldTemplateRequestBody };
var UpdateWorldTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateWorldTemplateRequest, _super);
    function UpdateWorldTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorldTemplateHeaders)
    ], UpdateWorldTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateWorldTemplateRequestBody)
    ], UpdateWorldTemplateRequest.prototype, "request", void 0);
    return UpdateWorldTemplateRequest;
}(SpeakeasyBase));
export { UpdateWorldTemplateRequest };
var UpdateWorldTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateWorldTemplateResponse, _super);
    function UpdateWorldTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWorldTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateWorldTemplateResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateWorldTemplateResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateWorldTemplateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateWorldTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateWorldTemplateResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateWorldTemplateResponse)
    ], UpdateWorldTemplateResponse.prototype, "updateWorldTemplateResponse", void 0);
    return UpdateWorldTemplateResponse;
}(SpeakeasyBase));
export { UpdateWorldTemplateResponse };
