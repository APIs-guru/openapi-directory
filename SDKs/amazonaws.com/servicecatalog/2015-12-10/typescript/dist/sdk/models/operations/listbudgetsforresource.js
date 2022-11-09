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
var ListBudgetsForResourceQueryParams = /** @class */ (function (_super) {
    __extends(ListBudgetsForResourceQueryParams, _super);
    function ListBudgetsForResourceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", String)
    ], ListBudgetsForResourceQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" }),
        __metadata("design:type", String)
    ], ListBudgetsForResourceQueryParams.prototype, "pageToken", void 0);
    return ListBudgetsForResourceQueryParams;
}(SpeakeasyBase));
export { ListBudgetsForResourceQueryParams };
export var ListBudgetsForResourceXAmzTargetEnum;
(function (ListBudgetsForResourceXAmzTargetEnum) {
    ListBudgetsForResourceXAmzTargetEnum["Aws242ServiceCatalogServiceListBudgetsForResource"] = "AWS242ServiceCatalogService.ListBudgetsForResource";
})(ListBudgetsForResourceXAmzTargetEnum || (ListBudgetsForResourceXAmzTargetEnum = {}));
var ListBudgetsForResourceHeaders = /** @class */ (function (_super) {
    __extends(ListBudgetsForResourceHeaders, _super);
    function ListBudgetsForResourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListBudgetsForResourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListBudgetsForResourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListBudgetsForResourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListBudgetsForResourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListBudgetsForResourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListBudgetsForResourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListBudgetsForResourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListBudgetsForResourceHeaders.prototype, "xAmzTarget", void 0);
    return ListBudgetsForResourceHeaders;
}(SpeakeasyBase));
export { ListBudgetsForResourceHeaders };
var ListBudgetsForResourceRequest = /** @class */ (function (_super) {
    __extends(ListBudgetsForResourceRequest, _super);
    function ListBudgetsForResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListBudgetsForResourceQueryParams)
    ], ListBudgetsForResourceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListBudgetsForResourceHeaders)
    ], ListBudgetsForResourceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListBudgetsForResourceInput)
    ], ListBudgetsForResourceRequest.prototype, "request", void 0);
    return ListBudgetsForResourceRequest;
}(SpeakeasyBase));
export { ListBudgetsForResourceRequest };
var ListBudgetsForResourceResponse = /** @class */ (function (_super) {
    __extends(ListBudgetsForResourceResponse, _super);
    function ListBudgetsForResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListBudgetsForResourceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListBudgetsForResourceResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListBudgetsForResourceOutput)
    ], ListBudgetsForResourceResponse.prototype, "listBudgetsForResourceOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListBudgetsForResourceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListBudgetsForResourceResponse.prototype, "statusCode", void 0);
    return ListBudgetsForResourceResponse;
}(SpeakeasyBase));
export { ListBudgetsForResourceResponse };
