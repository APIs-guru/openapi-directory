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
var ListPlaceIndexesQueryParams = /** @class */ (function (_super) {
    __extends(ListPlaceIndexesQueryParams, _super);
    function ListPlaceIndexesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListPlaceIndexesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListPlaceIndexesQueryParams.prototype, "nextToken", void 0);
    return ListPlaceIndexesQueryParams;
}(SpeakeasyBase));
export { ListPlaceIndexesQueryParams };
var ListPlaceIndexesHeaders = /** @class */ (function (_super) {
    __extends(ListPlaceIndexesHeaders, _super);
    function ListPlaceIndexesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListPlaceIndexesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListPlaceIndexesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListPlaceIndexesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListPlaceIndexesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListPlaceIndexesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListPlaceIndexesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListPlaceIndexesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListPlaceIndexesHeaders;
}(SpeakeasyBase));
export { ListPlaceIndexesHeaders };
var ListPlaceIndexesRequestBody = /** @class */ (function (_super) {
    __extends(ListPlaceIndexesRequestBody, _super);
    function ListPlaceIndexesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListPlaceIndexesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListPlaceIndexesRequestBody.prototype, "nextToken", void 0);
    return ListPlaceIndexesRequestBody;
}(SpeakeasyBase));
export { ListPlaceIndexesRequestBody };
var ListPlaceIndexesRequest = /** @class */ (function (_super) {
    __extends(ListPlaceIndexesRequest, _super);
    function ListPlaceIndexesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListPlaceIndexesQueryParams)
    ], ListPlaceIndexesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListPlaceIndexesHeaders)
    ], ListPlaceIndexesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListPlaceIndexesRequestBody)
    ], ListPlaceIndexesRequest.prototype, "request", void 0);
    return ListPlaceIndexesRequest;
}(SpeakeasyBase));
export { ListPlaceIndexesRequest };
var ListPlaceIndexesResponse = /** @class */ (function (_super) {
    __extends(ListPlaceIndexesResponse, _super);
    function ListPlaceIndexesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPlaceIndexesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListPlaceIndexesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPlaceIndexesResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListPlaceIndexesResponse)
    ], ListPlaceIndexesResponse.prototype, "listPlaceIndexesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListPlaceIndexesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPlaceIndexesResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListPlaceIndexesResponse.prototype, "validationException", void 0);
    return ListPlaceIndexesResponse;
}(SpeakeasyBase));
export { ListPlaceIndexesResponse };
