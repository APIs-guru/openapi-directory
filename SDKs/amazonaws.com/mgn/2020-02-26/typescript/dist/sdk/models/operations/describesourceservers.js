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
var DescribeSourceServersQueryParams = /** @class */ (function (_super) {
    __extends(DescribeSourceServersQueryParams, _super);
    function DescribeSourceServersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeSourceServersQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeSourceServersQueryParams.prototype, "nextToken", void 0);
    return DescribeSourceServersQueryParams;
}(SpeakeasyBase));
export { DescribeSourceServersQueryParams };
var DescribeSourceServersHeaders = /** @class */ (function (_super) {
    __extends(DescribeSourceServersHeaders, _super);
    function DescribeSourceServersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeSourceServersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeSourceServersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeSourceServersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeSourceServersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeSourceServersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeSourceServersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeSourceServersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeSourceServersHeaders;
}(SpeakeasyBase));
export { DescribeSourceServersHeaders };
// DescribeSourceServersRequestBodyFilters
/**
 * Request to filter Source Servers list.
**/
var DescribeSourceServersRequestBodyFilters = /** @class */ (function (_super) {
    __extends(DescribeSourceServersRequestBodyFilters, _super);
    function DescribeSourceServersRequestBodyFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isArchived" }),
        __metadata("design:type", Boolean)
    ], DescribeSourceServersRequestBodyFilters.prototype, "isArchived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceServerIDs" }),
        __metadata("design:type", Array)
    ], DescribeSourceServersRequestBodyFilters.prototype, "sourceServerIDs", void 0);
    return DescribeSourceServersRequestBodyFilters;
}(SpeakeasyBase));
export { DescribeSourceServersRequestBodyFilters };
var DescribeSourceServersRequestBody = /** @class */ (function (_super) {
    __extends(DescribeSourceServersRequestBody, _super);
    function DescribeSourceServersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", DescribeSourceServersRequestBodyFilters)
    ], DescribeSourceServersRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], DescribeSourceServersRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeSourceServersRequestBody.prototype, "nextToken", void 0);
    return DescribeSourceServersRequestBody;
}(SpeakeasyBase));
export { DescribeSourceServersRequestBody };
var DescribeSourceServersRequest = /** @class */ (function (_super) {
    __extends(DescribeSourceServersRequest, _super);
    function DescribeSourceServersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeSourceServersQueryParams)
    ], DescribeSourceServersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeSourceServersHeaders)
    ], DescribeSourceServersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeSourceServersRequestBody)
    ], DescribeSourceServersRequest.prototype, "request", void 0);
    return DescribeSourceServersRequest;
}(SpeakeasyBase));
export { DescribeSourceServersRequest };
var DescribeSourceServersResponse = /** @class */ (function (_super) {
    __extends(DescribeSourceServersResponse, _super);
    function DescribeSourceServersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeSourceServersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeSourceServersResponse)
    ], DescribeSourceServersResponse.prototype, "describeSourceServersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeSourceServersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeSourceServersResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeSourceServersResponse.prototype, "validationException", void 0);
    return DescribeSourceServersResponse;
}(SpeakeasyBase));
export { DescribeSourceServersResponse };
