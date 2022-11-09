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
var ListResponsePlansQueryParams = /** @class */ (function (_super) {
    __extends(ListResponsePlansQueryParams, _super);
    function ListResponsePlansQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListResponsePlansQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListResponsePlansQueryParams.prototype, "nextToken", void 0);
    return ListResponsePlansQueryParams;
}(SpeakeasyBase));
export { ListResponsePlansQueryParams };
var ListResponsePlansHeaders = /** @class */ (function (_super) {
    __extends(ListResponsePlansHeaders, _super);
    function ListResponsePlansHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListResponsePlansHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListResponsePlansHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListResponsePlansHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListResponsePlansHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListResponsePlansHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListResponsePlansHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListResponsePlansHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListResponsePlansHeaders;
}(SpeakeasyBase));
export { ListResponsePlansHeaders };
var ListResponsePlansRequestBody = /** @class */ (function (_super) {
    __extends(ListResponsePlansRequestBody, _super);
    function ListResponsePlansRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListResponsePlansRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListResponsePlansRequestBody.prototype, "nextToken", void 0);
    return ListResponsePlansRequestBody;
}(SpeakeasyBase));
export { ListResponsePlansRequestBody };
var ListResponsePlansRequest = /** @class */ (function (_super) {
    __extends(ListResponsePlansRequest, _super);
    function ListResponsePlansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListResponsePlansQueryParams)
    ], ListResponsePlansRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListResponsePlansHeaders)
    ], ListResponsePlansRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListResponsePlansRequestBody)
    ], ListResponsePlansRequest.prototype, "request", void 0);
    return ListResponsePlansRequest;
}(SpeakeasyBase));
export { ListResponsePlansRequest };
var ListResponsePlansResponse = /** @class */ (function (_super) {
    __extends(ListResponsePlansResponse, _super);
    function ListResponsePlansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResponsePlansResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListResponsePlansResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResponsePlansResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListResponsePlansOutput)
    ], ListResponsePlansResponse.prototype, "listResponsePlansOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListResponsePlansResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResponsePlansResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListResponsePlansResponse.prototype, "validationException", void 0);
    return ListResponsePlansResponse;
}(SpeakeasyBase));
export { ListResponsePlansResponse };
