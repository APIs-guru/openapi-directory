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
var DescribeCanariesLastRunQueryParams = /** @class */ (function (_super) {
    __extends(DescribeCanariesLastRunQueryParams, _super);
    function DescribeCanariesLastRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeCanariesLastRunQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeCanariesLastRunQueryParams.prototype, "nextToken", void 0);
    return DescribeCanariesLastRunQueryParams;
}(SpeakeasyBase));
export { DescribeCanariesLastRunQueryParams };
var DescribeCanariesLastRunHeaders = /** @class */ (function (_super) {
    __extends(DescribeCanariesLastRunHeaders, _super);
    function DescribeCanariesLastRunHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeCanariesLastRunHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeCanariesLastRunHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeCanariesLastRunHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeCanariesLastRunHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeCanariesLastRunHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeCanariesLastRunHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeCanariesLastRunHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeCanariesLastRunHeaders;
}(SpeakeasyBase));
export { DescribeCanariesLastRunHeaders };
var DescribeCanariesLastRunRequestBody = /** @class */ (function (_super) {
    __extends(DescribeCanariesLastRunRequestBody, _super);
    function DescribeCanariesLastRunRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], DescribeCanariesLastRunRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeCanariesLastRunRequestBody.prototype, "nextToken", void 0);
    return DescribeCanariesLastRunRequestBody;
}(SpeakeasyBase));
export { DescribeCanariesLastRunRequestBody };
var DescribeCanariesLastRunRequest = /** @class */ (function (_super) {
    __extends(DescribeCanariesLastRunRequest, _super);
    function DescribeCanariesLastRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeCanariesLastRunQueryParams)
    ], DescribeCanariesLastRunRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeCanariesLastRunHeaders)
    ], DescribeCanariesLastRunRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeCanariesLastRunRequestBody)
    ], DescribeCanariesLastRunRequest.prototype, "request", void 0);
    return DescribeCanariesLastRunRequest;
}(SpeakeasyBase));
export { DescribeCanariesLastRunRequest };
var DescribeCanariesLastRunResponse = /** @class */ (function (_super) {
    __extends(DescribeCanariesLastRunResponse, _super);
    function DescribeCanariesLastRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeCanariesLastRunResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeCanariesLastRunResponse)
    ], DescribeCanariesLastRunResponse.prototype, "describeCanariesLastRunResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeCanariesLastRunResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeCanariesLastRunResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeCanariesLastRunResponse.prototype, "validationException", void 0);
    return DescribeCanariesLastRunResponse;
}(SpeakeasyBase));
export { DescribeCanariesLastRunResponse };
