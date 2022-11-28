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
var ListLaunchPathsQueryParams = /** @class */ (function (_super) {
    __extends(ListLaunchPathsQueryParams, _super);
    function ListLaunchPathsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", String)
    ], ListLaunchPathsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" }),
        __metadata("design:type", String)
    ], ListLaunchPathsQueryParams.prototype, "pageToken", void 0);
    return ListLaunchPathsQueryParams;
}(SpeakeasyBase));
export { ListLaunchPathsQueryParams };
export var ListLaunchPathsXAmzTargetEnum;
(function (ListLaunchPathsXAmzTargetEnum) {
    ListLaunchPathsXAmzTargetEnum["Aws242ServiceCatalogServiceListLaunchPaths"] = "AWS242ServiceCatalogService.ListLaunchPaths";
})(ListLaunchPathsXAmzTargetEnum || (ListLaunchPathsXAmzTargetEnum = {}));
var ListLaunchPathsHeaders = /** @class */ (function (_super) {
    __extends(ListLaunchPathsHeaders, _super);
    function ListLaunchPathsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListLaunchPathsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListLaunchPathsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListLaunchPathsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListLaunchPathsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListLaunchPathsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListLaunchPathsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListLaunchPathsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListLaunchPathsHeaders.prototype, "xAmzTarget", void 0);
    return ListLaunchPathsHeaders;
}(SpeakeasyBase));
export { ListLaunchPathsHeaders };
var ListLaunchPathsRequest = /** @class */ (function (_super) {
    __extends(ListLaunchPathsRequest, _super);
    function ListLaunchPathsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLaunchPathsQueryParams)
    ], ListLaunchPathsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLaunchPathsHeaders)
    ], ListLaunchPathsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListLaunchPathsInput)
    ], ListLaunchPathsRequest.prototype, "request", void 0);
    return ListLaunchPathsRequest;
}(SpeakeasyBase));
export { ListLaunchPathsRequest };
var ListLaunchPathsResponse = /** @class */ (function (_super) {
    __extends(ListLaunchPathsResponse, _super);
    function ListLaunchPathsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListLaunchPathsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLaunchPathsResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLaunchPathsOutput)
    ], ListLaunchPathsResponse.prototype, "listLaunchPathsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLaunchPathsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListLaunchPathsResponse.prototype, "statusCode", void 0);
    return ListLaunchPathsResponse;
}(SpeakeasyBase));
export { ListLaunchPathsResponse };
