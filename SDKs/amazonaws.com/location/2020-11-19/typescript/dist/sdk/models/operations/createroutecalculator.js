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
var CreateRouteCalculatorHeaders = /** @class */ (function (_super) {
    __extends(CreateRouteCalculatorHeaders, _super);
    function CreateRouteCalculatorHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateRouteCalculatorHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateRouteCalculatorHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateRouteCalculatorHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateRouteCalculatorHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateRouteCalculatorHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateRouteCalculatorHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateRouteCalculatorHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateRouteCalculatorHeaders;
}(SpeakeasyBase));
export { CreateRouteCalculatorHeaders };
export var CreateRouteCalculatorRequestBodyPricingPlanEnum;
(function (CreateRouteCalculatorRequestBodyPricingPlanEnum) {
    CreateRouteCalculatorRequestBodyPricingPlanEnum["RequestBasedUsage"] = "RequestBasedUsage";
    CreateRouteCalculatorRequestBodyPricingPlanEnum["MobileAssetTracking"] = "MobileAssetTracking";
    CreateRouteCalculatorRequestBodyPricingPlanEnum["MobileAssetManagement"] = "MobileAssetManagement";
})(CreateRouteCalculatorRequestBodyPricingPlanEnum || (CreateRouteCalculatorRequestBodyPricingPlanEnum = {}));
var CreateRouteCalculatorRequestBody = /** @class */ (function (_super) {
    __extends(CreateRouteCalculatorRequestBody, _super);
    function CreateRouteCalculatorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculatorName" }),
        __metadata("design:type", String)
    ], CreateRouteCalculatorRequestBody.prototype, "calculatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataSource" }),
        __metadata("design:type", String)
    ], CreateRouteCalculatorRequestBody.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateRouteCalculatorRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PricingPlan" }),
        __metadata("design:type", String)
    ], CreateRouteCalculatorRequestBody.prototype, "pricingPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateRouteCalculatorRequestBody.prototype, "tags", void 0);
    return CreateRouteCalculatorRequestBody;
}(SpeakeasyBase));
export { CreateRouteCalculatorRequestBody };
var CreateRouteCalculatorRequest = /** @class */ (function (_super) {
    __extends(CreateRouteCalculatorRequest, _super);
    function CreateRouteCalculatorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRouteCalculatorHeaders)
    ], CreateRouteCalculatorRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRouteCalculatorRequestBody)
    ], CreateRouteCalculatorRequest.prototype, "request", void 0);
    return CreateRouteCalculatorRequest;
}(SpeakeasyBase));
export { CreateRouteCalculatorRequest };
var CreateRouteCalculatorResponse = /** @class */ (function (_super) {
    __extends(CreateRouteCalculatorResponse, _super);
    function CreateRouteCalculatorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteCalculatorResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteCalculatorResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRouteCalculatorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateRouteCalculatorResponse)
    ], CreateRouteCalculatorResponse.prototype, "createRouteCalculatorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteCalculatorResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateRouteCalculatorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteCalculatorResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteCalculatorResponse.prototype, "validationException", void 0);
    return CreateRouteCalculatorResponse;
}(SpeakeasyBase));
export { CreateRouteCalculatorResponse };
