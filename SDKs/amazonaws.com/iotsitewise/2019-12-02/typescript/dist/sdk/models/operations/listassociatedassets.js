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
var ListAssociatedAssetsPathParams = /** @class */ (function (_super) {
    __extends(ListAssociatedAssetsPathParams, _super);
    function ListAssociatedAssetsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assetId" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsPathParams.prototype, "assetId", void 0);
    return ListAssociatedAssetsPathParams;
}(SpeakeasyBase));
export { ListAssociatedAssetsPathParams };
export var ListAssociatedAssetsTraversalDirectionEnum;
(function (ListAssociatedAssetsTraversalDirectionEnum) {
    ListAssociatedAssetsTraversalDirectionEnum["Parent"] = "PARENT";
    ListAssociatedAssetsTraversalDirectionEnum["Child"] = "CHILD";
})(ListAssociatedAssetsTraversalDirectionEnum || (ListAssociatedAssetsTraversalDirectionEnum = {}));
var ListAssociatedAssetsQueryParams = /** @class */ (function (_super) {
    __extends(ListAssociatedAssetsQueryParams, _super);
    function ListAssociatedAssetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=hierarchyId" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsQueryParams.prototype, "hierarchyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListAssociatedAssetsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=traversalDirection" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsQueryParams.prototype, "traversalDirection", void 0);
    return ListAssociatedAssetsQueryParams;
}(SpeakeasyBase));
export { ListAssociatedAssetsQueryParams };
var ListAssociatedAssetsHeaders = /** @class */ (function (_super) {
    __extends(ListAssociatedAssetsHeaders, _super);
    function ListAssociatedAssetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAssociatedAssetsHeaders;
}(SpeakeasyBase));
export { ListAssociatedAssetsHeaders };
var ListAssociatedAssetsRequest = /** @class */ (function (_super) {
    __extends(ListAssociatedAssetsRequest, _super);
    function ListAssociatedAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssociatedAssetsPathParams)
    ], ListAssociatedAssetsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssociatedAssetsQueryParams)
    ], ListAssociatedAssetsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAssociatedAssetsHeaders)
    ], ListAssociatedAssetsRequest.prototype, "headers", void 0);
    return ListAssociatedAssetsRequest;
}(SpeakeasyBase));
export { ListAssociatedAssetsRequest };
var ListAssociatedAssetsResponse = /** @class */ (function (_super) {
    __extends(ListAssociatedAssetsResponse, _super);
    function ListAssociatedAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAssociatedAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAssociatedAssetsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAssociatedAssetsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListAssociatedAssetsResponse)
    ], ListAssociatedAssetsResponse.prototype, "listAssociatedAssetsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAssociatedAssetsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAssociatedAssetsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListAssociatedAssetsResponse.prototype, "throttlingException", void 0);
    return ListAssociatedAssetsResponse;
}(SpeakeasyBase));
export { ListAssociatedAssetsResponse };
