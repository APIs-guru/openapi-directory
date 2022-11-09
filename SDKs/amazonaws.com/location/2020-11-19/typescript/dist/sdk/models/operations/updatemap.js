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
var UpdateMapPathParams = /** @class */ (function (_super) {
    __extends(UpdateMapPathParams, _super);
    function UpdateMapPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MapName" }),
        __metadata("design:type", String)
    ], UpdateMapPathParams.prototype, "mapName", void 0);
    return UpdateMapPathParams;
}(SpeakeasyBase));
export { UpdateMapPathParams };
var UpdateMapHeaders = /** @class */ (function (_super) {
    __extends(UpdateMapHeaders, _super);
    function UpdateMapHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateMapHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateMapHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateMapHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateMapHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateMapHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateMapHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateMapHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateMapHeaders;
}(SpeakeasyBase));
export { UpdateMapHeaders };
export var UpdateMapRequestBodyPricingPlanEnum;
(function (UpdateMapRequestBodyPricingPlanEnum) {
    UpdateMapRequestBodyPricingPlanEnum["RequestBasedUsage"] = "RequestBasedUsage";
    UpdateMapRequestBodyPricingPlanEnum["MobileAssetTracking"] = "MobileAssetTracking";
    UpdateMapRequestBodyPricingPlanEnum["MobileAssetManagement"] = "MobileAssetManagement";
})(UpdateMapRequestBodyPricingPlanEnum || (UpdateMapRequestBodyPricingPlanEnum = {}));
var UpdateMapRequestBody = /** @class */ (function (_super) {
    __extends(UpdateMapRequestBody, _super);
    function UpdateMapRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateMapRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=PricingPlan" }),
        __metadata("design:type", String)
    ], UpdateMapRequestBody.prototype, "pricingPlan", void 0);
    return UpdateMapRequestBody;
}(SpeakeasyBase));
export { UpdateMapRequestBody };
var UpdateMapRequest = /** @class */ (function (_super) {
    __extends(UpdateMapRequest, _super);
    function UpdateMapRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateMapPathParams)
    ], UpdateMapRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateMapHeaders)
    ], UpdateMapRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateMapRequestBody)
    ], UpdateMapRequest.prototype, "request", void 0);
    return UpdateMapRequest;
}(SpeakeasyBase));
export { UpdateMapRequest };
var UpdateMapResponse = /** @class */ (function (_super) {
    __extends(UpdateMapResponse, _super);
    function UpdateMapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateMapResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateMapResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateMapResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateMapResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateMapResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateMapResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateMapResponse)
    ], UpdateMapResponse.prototype, "updateMapResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateMapResponse.prototype, "validationException", void 0);
    return UpdateMapResponse;
}(SpeakeasyBase));
export { UpdateMapResponse };
