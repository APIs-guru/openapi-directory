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
var ListReplicationSetsQueryParams = /** @class */ (function (_super) {
    __extends(ListReplicationSetsQueryParams, _super);
    function ListReplicationSetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListReplicationSetsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListReplicationSetsQueryParams.prototype, "nextToken", void 0);
    return ListReplicationSetsQueryParams;
}(SpeakeasyBase));
export { ListReplicationSetsQueryParams };
var ListReplicationSetsHeaders = /** @class */ (function (_super) {
    __extends(ListReplicationSetsHeaders, _super);
    function ListReplicationSetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListReplicationSetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListReplicationSetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListReplicationSetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListReplicationSetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListReplicationSetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListReplicationSetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListReplicationSetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListReplicationSetsHeaders;
}(SpeakeasyBase));
export { ListReplicationSetsHeaders };
var ListReplicationSetsRequestBody = /** @class */ (function (_super) {
    __extends(ListReplicationSetsRequestBody, _super);
    function ListReplicationSetsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListReplicationSetsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListReplicationSetsRequestBody.prototype, "nextToken", void 0);
    return ListReplicationSetsRequestBody;
}(SpeakeasyBase));
export { ListReplicationSetsRequestBody };
var ListReplicationSetsRequest = /** @class */ (function (_super) {
    __extends(ListReplicationSetsRequest, _super);
    function ListReplicationSetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListReplicationSetsQueryParams)
    ], ListReplicationSetsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListReplicationSetsHeaders)
    ], ListReplicationSetsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListReplicationSetsRequestBody)
    ], ListReplicationSetsRequest.prototype, "request", void 0);
    return ListReplicationSetsRequest;
}(SpeakeasyBase));
export { ListReplicationSetsRequest };
var ListReplicationSetsResponse = /** @class */ (function (_super) {
    __extends(ListReplicationSetsResponse, _super);
    function ListReplicationSetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListReplicationSetsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListReplicationSetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListReplicationSetsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListReplicationSetsOutput)
    ], ListReplicationSetsResponse.prototype, "listReplicationSetsOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListReplicationSetsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListReplicationSetsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListReplicationSetsResponse.prototype, "validationException", void 0);
    return ListReplicationSetsResponse;
}(SpeakeasyBase));
export { ListReplicationSetsResponse };
