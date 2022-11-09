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
var UpdateGeofenceCollectionPathParams = /** @class */ (function (_super) {
    __extends(UpdateGeofenceCollectionPathParams, _super);
    function UpdateGeofenceCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CollectionName" }),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionPathParams.prototype, "collectionName", void 0);
    return UpdateGeofenceCollectionPathParams;
}(SpeakeasyBase));
export { UpdateGeofenceCollectionPathParams };
var UpdateGeofenceCollectionHeaders = /** @class */ (function (_super) {
    __extends(UpdateGeofenceCollectionHeaders, _super);
    function UpdateGeofenceCollectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateGeofenceCollectionHeaders;
}(SpeakeasyBase));
export { UpdateGeofenceCollectionHeaders };
export var UpdateGeofenceCollectionRequestBodyPricingPlanEnum;
(function (UpdateGeofenceCollectionRequestBodyPricingPlanEnum) {
    UpdateGeofenceCollectionRequestBodyPricingPlanEnum["RequestBasedUsage"] = "RequestBasedUsage";
    UpdateGeofenceCollectionRequestBodyPricingPlanEnum["MobileAssetTracking"] = "MobileAssetTracking";
    UpdateGeofenceCollectionRequestBodyPricingPlanEnum["MobileAssetManagement"] = "MobileAssetManagement";
})(UpdateGeofenceCollectionRequestBodyPricingPlanEnum || (UpdateGeofenceCollectionRequestBodyPricingPlanEnum = {}));
var UpdateGeofenceCollectionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateGeofenceCollectionRequestBody, _super);
    function UpdateGeofenceCollectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=PricingPlan" }),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionRequestBody.prototype, "pricingPlan", void 0);
    __decorate([
        Metadata({ data: "json, name=PricingPlanDataSource" }),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionRequestBody.prototype, "pricingPlanDataSource", void 0);
    return UpdateGeofenceCollectionRequestBody;
}(SpeakeasyBase));
export { UpdateGeofenceCollectionRequestBody };
var UpdateGeofenceCollectionRequest = /** @class */ (function (_super) {
    __extends(UpdateGeofenceCollectionRequest, _super);
    function UpdateGeofenceCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateGeofenceCollectionPathParams)
    ], UpdateGeofenceCollectionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateGeofenceCollectionHeaders)
    ], UpdateGeofenceCollectionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGeofenceCollectionRequestBody)
    ], UpdateGeofenceCollectionRequest.prototype, "request", void 0);
    return UpdateGeofenceCollectionRequest;
}(SpeakeasyBase));
export { UpdateGeofenceCollectionRequest };
var UpdateGeofenceCollectionResponse = /** @class */ (function (_super) {
    __extends(UpdateGeofenceCollectionResponse, _super);
    function UpdateGeofenceCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeofenceCollectionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateGeofenceCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeofenceCollectionResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeofenceCollectionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateGeofenceCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeofenceCollectionResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateGeofenceCollectionResponse)
    ], UpdateGeofenceCollectionResponse.prototype, "updateGeofenceCollectionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGeofenceCollectionResponse.prototype, "validationException", void 0);
    return UpdateGeofenceCollectionResponse;
}(SpeakeasyBase));
export { UpdateGeofenceCollectionResponse };
