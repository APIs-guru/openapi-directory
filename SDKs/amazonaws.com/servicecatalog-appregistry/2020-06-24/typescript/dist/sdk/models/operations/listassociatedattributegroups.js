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
var ListAssociatedAttributeGroupsPathParams = /** @class */ (function (_super) {
    __extends(ListAssociatedAttributeGroupsPathParams, _super);
    function ListAssociatedAttributeGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application" }),
        __metadata("design:type", String)
    ], ListAssociatedAttributeGroupsPathParams.prototype, "application", void 0);
    return ListAssociatedAttributeGroupsPathParams;
}(SpeakeasyBase));
export { ListAssociatedAttributeGroupsPathParams };
var ListAssociatedAttributeGroupsQueryParams = /** @class */ (function (_super) {
    __extends(ListAssociatedAttributeGroupsQueryParams, _super);
    function ListAssociatedAttributeGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListAssociatedAttributeGroupsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAssociatedAttributeGroupsQueryParams.prototype, "nextToken", void 0);
    return ListAssociatedAttributeGroupsQueryParams;
}(SpeakeasyBase));
export { ListAssociatedAttributeGroupsQueryParams };
var ListAssociatedAttributeGroupsHeaders = /** @class */ (function (_super) {
    __extends(ListAssociatedAttributeGroupsHeaders, _super);
    function ListAssociatedAttributeGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAssociatedAttributeGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAssociatedAttributeGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAssociatedAttributeGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAssociatedAttributeGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAssociatedAttributeGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAssociatedAttributeGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAssociatedAttributeGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAssociatedAttributeGroupsHeaders;
}(SpeakeasyBase));
export { ListAssociatedAttributeGroupsHeaders };
var ListAssociatedAttributeGroupsRequest = /** @class */ (function (_super) {
    __extends(ListAssociatedAttributeGroupsRequest, _super);
    function ListAssociatedAttributeGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAssociatedAttributeGroupsPathParams)
    ], ListAssociatedAttributeGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAssociatedAttributeGroupsQueryParams)
    ], ListAssociatedAttributeGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAssociatedAttributeGroupsHeaders)
    ], ListAssociatedAttributeGroupsRequest.prototype, "headers", void 0);
    return ListAssociatedAttributeGroupsRequest;
}(SpeakeasyBase));
export { ListAssociatedAttributeGroupsRequest };
var ListAssociatedAttributeGroupsResponse = /** @class */ (function (_super) {
    __extends(ListAssociatedAttributeGroupsResponse, _super);
    function ListAssociatedAttributeGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAssociatedAttributeGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAssociatedAttributeGroupsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAssociatedAttributeGroupsResponse)
    ], ListAssociatedAttributeGroupsResponse.prototype, "listAssociatedAttributeGroupsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAssociatedAttributeGroupsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAssociatedAttributeGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAssociatedAttributeGroupsResponse.prototype, "validationException", void 0);
    return ListAssociatedAttributeGroupsResponse;
}(SpeakeasyBase));
export { ListAssociatedAttributeGroupsResponse };
