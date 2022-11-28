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
var ListDocumentVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListDocumentVersionsQueryParams, _super);
    function ListDocumentVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDocumentVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDocumentVersionsQueryParams.prototype, "nextToken", void 0);
    return ListDocumentVersionsQueryParams;
}(SpeakeasyBase));
export { ListDocumentVersionsQueryParams };
export var ListDocumentVersionsXAmzTargetEnum;
(function (ListDocumentVersionsXAmzTargetEnum) {
    ListDocumentVersionsXAmzTargetEnum["AmazonSsmListDocumentVersions"] = "AmazonSSM.ListDocumentVersions";
})(ListDocumentVersionsXAmzTargetEnum || (ListDocumentVersionsXAmzTargetEnum = {}));
var ListDocumentVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListDocumentVersionsHeaders, _super);
    function ListDocumentVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDocumentVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDocumentVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDocumentVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDocumentVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDocumentVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDocumentVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDocumentVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListDocumentVersionsHeaders.prototype, "xAmzTarget", void 0);
    return ListDocumentVersionsHeaders;
}(SpeakeasyBase));
export { ListDocumentVersionsHeaders };
var ListDocumentVersionsRequest = /** @class */ (function (_super) {
    __extends(ListDocumentVersionsRequest, _super);
    function ListDocumentVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDocumentVersionsQueryParams)
    ], ListDocumentVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDocumentVersionsHeaders)
    ], ListDocumentVersionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListDocumentVersionsRequest)
    ], ListDocumentVersionsRequest.prototype, "request", void 0);
    return ListDocumentVersionsRequest;
}(SpeakeasyBase));
export { ListDocumentVersionsRequest };
var ListDocumentVersionsResponse = /** @class */ (function (_super) {
    __extends(ListDocumentVersionsResponse, _super);
    function ListDocumentVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDocumentVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDocumentVersionsResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDocumentVersionsResponse.prototype, "invalidDocument", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDocumentVersionsResponse.prototype, "invalidNextToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDocumentVersionsResult)
    ], ListDocumentVersionsResponse.prototype, "listDocumentVersionsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDocumentVersionsResponse.prototype, "statusCode", void 0);
    return ListDocumentVersionsResponse;
}(SpeakeasyBase));
export { ListDocumentVersionsResponse };
