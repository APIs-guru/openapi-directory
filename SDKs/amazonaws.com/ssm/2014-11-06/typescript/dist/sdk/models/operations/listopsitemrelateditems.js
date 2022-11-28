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
var ListOpsItemRelatedItemsQueryParams = /** @class */ (function (_super) {
    __extends(ListOpsItemRelatedItemsQueryParams, _super);
    function ListOpsItemRelatedItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListOpsItemRelatedItemsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListOpsItemRelatedItemsQueryParams.prototype, "nextToken", void 0);
    return ListOpsItemRelatedItemsQueryParams;
}(SpeakeasyBase));
export { ListOpsItemRelatedItemsQueryParams };
export var ListOpsItemRelatedItemsXAmzTargetEnum;
(function (ListOpsItemRelatedItemsXAmzTargetEnum) {
    ListOpsItemRelatedItemsXAmzTargetEnum["AmazonSsmListOpsItemRelatedItems"] = "AmazonSSM.ListOpsItemRelatedItems";
})(ListOpsItemRelatedItemsXAmzTargetEnum || (ListOpsItemRelatedItemsXAmzTargetEnum = {}));
var ListOpsItemRelatedItemsHeaders = /** @class */ (function (_super) {
    __extends(ListOpsItemRelatedItemsHeaders, _super);
    function ListOpsItemRelatedItemsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListOpsItemRelatedItemsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListOpsItemRelatedItemsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListOpsItemRelatedItemsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListOpsItemRelatedItemsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListOpsItemRelatedItemsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListOpsItemRelatedItemsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListOpsItemRelatedItemsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListOpsItemRelatedItemsHeaders.prototype, "xAmzTarget", void 0);
    return ListOpsItemRelatedItemsHeaders;
}(SpeakeasyBase));
export { ListOpsItemRelatedItemsHeaders };
var ListOpsItemRelatedItemsRequest = /** @class */ (function (_super) {
    __extends(ListOpsItemRelatedItemsRequest, _super);
    function ListOpsItemRelatedItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListOpsItemRelatedItemsQueryParams)
    ], ListOpsItemRelatedItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListOpsItemRelatedItemsHeaders)
    ], ListOpsItemRelatedItemsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListOpsItemRelatedItemsRequest)
    ], ListOpsItemRelatedItemsRequest.prototype, "request", void 0);
    return ListOpsItemRelatedItemsRequest;
}(SpeakeasyBase));
export { ListOpsItemRelatedItemsRequest };
var ListOpsItemRelatedItemsResponse = /** @class */ (function (_super) {
    __extends(ListOpsItemRelatedItemsResponse, _super);
    function ListOpsItemRelatedItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListOpsItemRelatedItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOpsItemRelatedItemsResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOpsItemRelatedItemsResponse)
    ], ListOpsItemRelatedItemsResponse.prototype, "listOpsItemRelatedItemsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOpsItemRelatedItemsResponse.prototype, "opsItemInvalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListOpsItemRelatedItemsResponse.prototype, "statusCode", void 0);
    return ListOpsItemRelatedItemsResponse;
}(SpeakeasyBase));
export { ListOpsItemRelatedItemsResponse };
