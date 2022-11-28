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
export var ExecuteProvisionedProductPlanXAmzTargetEnum;
(function (ExecuteProvisionedProductPlanXAmzTargetEnum) {
    ExecuteProvisionedProductPlanXAmzTargetEnum["Aws242ServiceCatalogServiceExecuteProvisionedProductPlan"] = "AWS242ServiceCatalogService.ExecuteProvisionedProductPlan";
})(ExecuteProvisionedProductPlanXAmzTargetEnum || (ExecuteProvisionedProductPlanXAmzTargetEnum = {}));
var ExecuteProvisionedProductPlanHeaders = /** @class */ (function (_super) {
    __extends(ExecuteProvisionedProductPlanHeaders, _super);
    function ExecuteProvisionedProductPlanHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ExecuteProvisionedProductPlanHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ExecuteProvisionedProductPlanHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ExecuteProvisionedProductPlanHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ExecuteProvisionedProductPlanHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ExecuteProvisionedProductPlanHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ExecuteProvisionedProductPlanHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ExecuteProvisionedProductPlanHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ExecuteProvisionedProductPlanHeaders.prototype, "xAmzTarget", void 0);
    return ExecuteProvisionedProductPlanHeaders;
}(SpeakeasyBase));
export { ExecuteProvisionedProductPlanHeaders };
var ExecuteProvisionedProductPlanRequest = /** @class */ (function (_super) {
    __extends(ExecuteProvisionedProductPlanRequest, _super);
    function ExecuteProvisionedProductPlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExecuteProvisionedProductPlanHeaders)
    ], ExecuteProvisionedProductPlanRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExecuteProvisionedProductPlanInput)
    ], ExecuteProvisionedProductPlanRequest.prototype, "request", void 0);
    return ExecuteProvisionedProductPlanRequest;
}(SpeakeasyBase));
export { ExecuteProvisionedProductPlanRequest };
var ExecuteProvisionedProductPlanResponse = /** @class */ (function (_super) {
    __extends(ExecuteProvisionedProductPlanResponse, _super);
    function ExecuteProvisionedProductPlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExecuteProvisionedProductPlanResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExecuteProvisionedProductPlanOutput)
    ], ExecuteProvisionedProductPlanResponse.prototype, "executeProvisionedProductPlanOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExecuteProvisionedProductPlanResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExecuteProvisionedProductPlanResponse.prototype, "invalidStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExecuteProvisionedProductPlanResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExecuteProvisionedProductPlanResponse.prototype, "statusCode", void 0);
    return ExecuteProvisionedProductPlanResponse;
}(SpeakeasyBase));
export { ExecuteProvisionedProductPlanResponse };
