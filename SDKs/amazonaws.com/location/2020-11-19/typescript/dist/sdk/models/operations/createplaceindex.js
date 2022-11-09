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
var CreatePlaceIndexHeaders = /** @class */ (function (_super) {
    __extends(CreatePlaceIndexHeaders, _super);
    function CreatePlaceIndexHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreatePlaceIndexHeaders;
}(SpeakeasyBase));
export { CreatePlaceIndexHeaders };
// CreatePlaceIndexRequestBodyDataSourceConfiguration
/**
 * <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>
**/
var CreatePlaceIndexRequestBodyDataSourceConfiguration = /** @class */ (function (_super) {
    __extends(CreatePlaceIndexRequestBodyDataSourceConfiguration, _super);
    function CreatePlaceIndexRequestBodyDataSourceConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=IntendedUse" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexRequestBodyDataSourceConfiguration.prototype, "intendedUse", void 0);
    return CreatePlaceIndexRequestBodyDataSourceConfiguration;
}(SpeakeasyBase));
export { CreatePlaceIndexRequestBodyDataSourceConfiguration };
export var CreatePlaceIndexRequestBodyPricingPlanEnum;
(function (CreatePlaceIndexRequestBodyPricingPlanEnum) {
    CreatePlaceIndexRequestBodyPricingPlanEnum["RequestBasedUsage"] = "RequestBasedUsage";
    CreatePlaceIndexRequestBodyPricingPlanEnum["MobileAssetTracking"] = "MobileAssetTracking";
    CreatePlaceIndexRequestBodyPricingPlanEnum["MobileAssetManagement"] = "MobileAssetManagement";
})(CreatePlaceIndexRequestBodyPricingPlanEnum || (CreatePlaceIndexRequestBodyPricingPlanEnum = {}));
var CreatePlaceIndexRequestBody = /** @class */ (function (_super) {
    __extends(CreatePlaceIndexRequestBody, _super);
    function CreatePlaceIndexRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DataSource" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexRequestBody.prototype, "dataSource", void 0);
    __decorate([
        Metadata({ data: "json, name=DataSourceConfiguration" }),
        __metadata("design:type", CreatePlaceIndexRequestBodyDataSourceConfiguration)
    ], CreatePlaceIndexRequestBody.prototype, "dataSourceConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=IndexName" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexRequestBody.prototype, "indexName", void 0);
    __decorate([
        Metadata({ data: "json, name=PricingPlan" }),
        __metadata("design:type", String)
    ], CreatePlaceIndexRequestBody.prototype, "pricingPlan", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreatePlaceIndexRequestBody.prototype, "tags", void 0);
    return CreatePlaceIndexRequestBody;
}(SpeakeasyBase));
export { CreatePlaceIndexRequestBody };
var CreatePlaceIndexRequest = /** @class */ (function (_super) {
    __extends(CreatePlaceIndexRequest, _super);
    function CreatePlaceIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreatePlaceIndexHeaders)
    ], CreatePlaceIndexRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreatePlaceIndexRequestBody)
    ], CreatePlaceIndexRequest.prototype, "request", void 0);
    return CreatePlaceIndexRequest;
}(SpeakeasyBase));
export { CreatePlaceIndexRequest };
var CreatePlaceIndexResponse = /** @class */ (function (_super) {
    __extends(CreatePlaceIndexResponse, _super);
    function CreatePlaceIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreatePlaceIndexResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreatePlaceIndexResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreatePlaceIndexResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreatePlaceIndexResponse)
    ], CreatePlaceIndexResponse.prototype, "createPlaceIndexResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreatePlaceIndexResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreatePlaceIndexResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreatePlaceIndexResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreatePlaceIndexResponse.prototype, "validationException", void 0);
    return CreatePlaceIndexResponse;
}(SpeakeasyBase));
export { CreatePlaceIndexResponse };
