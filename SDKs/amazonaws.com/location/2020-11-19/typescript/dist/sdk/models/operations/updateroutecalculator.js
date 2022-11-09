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
var UpdateRouteCalculatorPathParams = /** @class */ (function (_super) {
    __extends(UpdateRouteCalculatorPathParams, _super);
    function UpdateRouteCalculatorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CalculatorName" }),
        __metadata("design:type", String)
    ], UpdateRouteCalculatorPathParams.prototype, "calculatorName", void 0);
    return UpdateRouteCalculatorPathParams;
}(SpeakeasyBase));
export { UpdateRouteCalculatorPathParams };
var UpdateRouteCalculatorHeaders = /** @class */ (function (_super) {
    __extends(UpdateRouteCalculatorHeaders, _super);
    function UpdateRouteCalculatorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateRouteCalculatorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateRouteCalculatorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateRouteCalculatorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateRouteCalculatorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateRouteCalculatorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateRouteCalculatorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateRouteCalculatorHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateRouteCalculatorHeaders;
}(SpeakeasyBase));
export { UpdateRouteCalculatorHeaders };
export var UpdateRouteCalculatorRequestBodyPricingPlanEnum;
(function (UpdateRouteCalculatorRequestBodyPricingPlanEnum) {
    UpdateRouteCalculatorRequestBodyPricingPlanEnum["RequestBasedUsage"] = "RequestBasedUsage";
    UpdateRouteCalculatorRequestBodyPricingPlanEnum["MobileAssetTracking"] = "MobileAssetTracking";
    UpdateRouteCalculatorRequestBodyPricingPlanEnum["MobileAssetManagement"] = "MobileAssetManagement";
})(UpdateRouteCalculatorRequestBodyPricingPlanEnum || (UpdateRouteCalculatorRequestBodyPricingPlanEnum = {}));
var UpdateRouteCalculatorRequestBody = /** @class */ (function (_super) {
    __extends(UpdateRouteCalculatorRequestBody, _super);
    function UpdateRouteCalculatorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateRouteCalculatorRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=PricingPlan" }),
        __metadata("design:type", String)
    ], UpdateRouteCalculatorRequestBody.prototype, "pricingPlan", void 0);
    return UpdateRouteCalculatorRequestBody;
}(SpeakeasyBase));
export { UpdateRouteCalculatorRequestBody };
var UpdateRouteCalculatorRequest = /** @class */ (function (_super) {
    __extends(UpdateRouteCalculatorRequest, _super);
    function UpdateRouteCalculatorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRouteCalculatorPathParams)
    ], UpdateRouteCalculatorRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRouteCalculatorHeaders)
    ], UpdateRouteCalculatorRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateRouteCalculatorRequestBody)
    ], UpdateRouteCalculatorRequest.prototype, "request", void 0);
    return UpdateRouteCalculatorRequest;
}(SpeakeasyBase));
export { UpdateRouteCalculatorRequest };
var UpdateRouteCalculatorResponse = /** @class */ (function (_super) {
    __extends(UpdateRouteCalculatorResponse, _super);
    function UpdateRouteCalculatorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRouteCalculatorResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRouteCalculatorResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRouteCalculatorResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRouteCalculatorResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateRouteCalculatorResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRouteCalculatorResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateRouteCalculatorResponse)
    ], UpdateRouteCalculatorResponse.prototype, "updateRouteCalculatorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateRouteCalculatorResponse.prototype, "validationException", void 0);
    return UpdateRouteCalculatorResponse;
}(SpeakeasyBase));
export { UpdateRouteCalculatorResponse };
