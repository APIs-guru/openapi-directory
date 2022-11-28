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
var UpdatePlaceIndexPathParams = /** @class */ (function (_super) {
    __extends(UpdatePlaceIndexPathParams, _super);
    function UpdatePlaceIndexPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IndexName" }),
        __metadata("design:type", String)
    ], UpdatePlaceIndexPathParams.prototype, "indexName", void 0);
    return UpdatePlaceIndexPathParams;
}(SpeakeasyBase));
export { UpdatePlaceIndexPathParams };
var UpdatePlaceIndexHeaders = /** @class */ (function (_super) {
    __extends(UpdatePlaceIndexHeaders, _super);
    function UpdatePlaceIndexHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdatePlaceIndexHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdatePlaceIndexHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdatePlaceIndexHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdatePlaceIndexHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdatePlaceIndexHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdatePlaceIndexHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdatePlaceIndexHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdatePlaceIndexHeaders;
}(SpeakeasyBase));
export { UpdatePlaceIndexHeaders };
// UpdatePlaceIndexRequestBodyDataSourceConfiguration
/**
 * <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>
**/
var UpdatePlaceIndexRequestBodyDataSourceConfiguration = /** @class */ (function (_super) {
    __extends(UpdatePlaceIndexRequestBodyDataSourceConfiguration, _super);
    function UpdatePlaceIndexRequestBodyDataSourceConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IntendedUse" }),
        __metadata("design:type", String)
    ], UpdatePlaceIndexRequestBodyDataSourceConfiguration.prototype, "intendedUse", void 0);
    return UpdatePlaceIndexRequestBodyDataSourceConfiguration;
}(SpeakeasyBase));
export { UpdatePlaceIndexRequestBodyDataSourceConfiguration };
export var UpdatePlaceIndexRequestBodyPricingPlanEnum;
(function (UpdatePlaceIndexRequestBodyPricingPlanEnum) {
    UpdatePlaceIndexRequestBodyPricingPlanEnum["RequestBasedUsage"] = "RequestBasedUsage";
    UpdatePlaceIndexRequestBodyPricingPlanEnum["MobileAssetTracking"] = "MobileAssetTracking";
    UpdatePlaceIndexRequestBodyPricingPlanEnum["MobileAssetManagement"] = "MobileAssetManagement";
})(UpdatePlaceIndexRequestBodyPricingPlanEnum || (UpdatePlaceIndexRequestBodyPricingPlanEnum = {}));
var UpdatePlaceIndexRequestBody = /** @class */ (function (_super) {
    __extends(UpdatePlaceIndexRequestBody, _super);
    function UpdatePlaceIndexRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataSourceConfiguration" }),
        __metadata("design:type", UpdatePlaceIndexRequestBodyDataSourceConfiguration)
    ], UpdatePlaceIndexRequestBody.prototype, "dataSourceConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdatePlaceIndexRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PricingPlan" }),
        __metadata("design:type", String)
    ], UpdatePlaceIndexRequestBody.prototype, "pricingPlan", void 0);
    return UpdatePlaceIndexRequestBody;
}(SpeakeasyBase));
export { UpdatePlaceIndexRequestBody };
var UpdatePlaceIndexRequest = /** @class */ (function (_super) {
    __extends(UpdatePlaceIndexRequest, _super);
    function UpdatePlaceIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePlaceIndexPathParams)
    ], UpdatePlaceIndexRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePlaceIndexHeaders)
    ], UpdatePlaceIndexRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePlaceIndexRequestBody)
    ], UpdatePlaceIndexRequest.prototype, "request", void 0);
    return UpdatePlaceIndexRequest;
}(SpeakeasyBase));
export { UpdatePlaceIndexRequest };
var UpdatePlaceIndexResponse = /** @class */ (function (_super) {
    __extends(UpdatePlaceIndexResponse, _super);
    function UpdatePlaceIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePlaceIndexResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePlaceIndexResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePlaceIndexResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePlaceIndexResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePlaceIndexResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePlaceIndexResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdatePlaceIndexResponse)
    ], UpdatePlaceIndexResponse.prototype, "updatePlaceIndexResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePlaceIndexResponse.prototype, "validationException", void 0);
    return UpdatePlaceIndexResponse;
}(SpeakeasyBase));
export { UpdatePlaceIndexResponse };
