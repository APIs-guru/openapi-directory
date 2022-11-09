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
var DescribeReplicationConfigurationTemplatesQueryParams = /** @class */ (function (_super) {
    __extends(DescribeReplicationConfigurationTemplatesQueryParams, _super);
    function DescribeReplicationConfigurationTemplatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeReplicationConfigurationTemplatesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeReplicationConfigurationTemplatesQueryParams.prototype, "nextToken", void 0);
    return DescribeReplicationConfigurationTemplatesQueryParams;
}(SpeakeasyBase));
export { DescribeReplicationConfigurationTemplatesQueryParams };
var DescribeReplicationConfigurationTemplatesHeaders = /** @class */ (function (_super) {
    __extends(DescribeReplicationConfigurationTemplatesHeaders, _super);
    function DescribeReplicationConfigurationTemplatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeReplicationConfigurationTemplatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeReplicationConfigurationTemplatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeReplicationConfigurationTemplatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeReplicationConfigurationTemplatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeReplicationConfigurationTemplatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeReplicationConfigurationTemplatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeReplicationConfigurationTemplatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeReplicationConfigurationTemplatesHeaders;
}(SpeakeasyBase));
export { DescribeReplicationConfigurationTemplatesHeaders };
var DescribeReplicationConfigurationTemplatesRequestBody = /** @class */ (function (_super) {
    __extends(DescribeReplicationConfigurationTemplatesRequestBody, _super);
    function DescribeReplicationConfigurationTemplatesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], DescribeReplicationConfigurationTemplatesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeReplicationConfigurationTemplatesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=replicationConfigurationTemplateIDs" }),
        __metadata("design:type", Array)
    ], DescribeReplicationConfigurationTemplatesRequestBody.prototype, "replicationConfigurationTemplateIDs", void 0);
    return DescribeReplicationConfigurationTemplatesRequestBody;
}(SpeakeasyBase));
export { DescribeReplicationConfigurationTemplatesRequestBody };
var DescribeReplicationConfigurationTemplatesRequest = /** @class */ (function (_super) {
    __extends(DescribeReplicationConfigurationTemplatesRequest, _super);
    function DescribeReplicationConfigurationTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeReplicationConfigurationTemplatesQueryParams)
    ], DescribeReplicationConfigurationTemplatesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeReplicationConfigurationTemplatesHeaders)
    ], DescribeReplicationConfigurationTemplatesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeReplicationConfigurationTemplatesRequestBody)
    ], DescribeReplicationConfigurationTemplatesRequest.prototype, "request", void 0);
    return DescribeReplicationConfigurationTemplatesRequest;
}(SpeakeasyBase));
export { DescribeReplicationConfigurationTemplatesRequest };
var DescribeReplicationConfigurationTemplatesResponse = /** @class */ (function (_super) {
    __extends(DescribeReplicationConfigurationTemplatesResponse, _super);
    function DescribeReplicationConfigurationTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeReplicationConfigurationTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeReplicationConfigurationTemplatesResponse)
    ], DescribeReplicationConfigurationTemplatesResponse.prototype, "describeReplicationConfigurationTemplatesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeReplicationConfigurationTemplatesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeReplicationConfigurationTemplatesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeReplicationConfigurationTemplatesResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeReplicationConfigurationTemplatesResponse.prototype, "validationException", void 0);
    return DescribeReplicationConfigurationTemplatesResponse;
}(SpeakeasyBase));
export { DescribeReplicationConfigurationTemplatesResponse };
