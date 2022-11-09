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
var DescribeHomeRegionControlsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeHomeRegionControlsQueryParams, _super);
    function DescribeHomeRegionControlsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeHomeRegionControlsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeHomeRegionControlsQueryParams.prototype, "nextToken", void 0);
    return DescribeHomeRegionControlsQueryParams;
}(SpeakeasyBase));
export { DescribeHomeRegionControlsQueryParams };
export var DescribeHomeRegionControlsXAmzTargetEnum;
(function (DescribeHomeRegionControlsXAmzTargetEnum) {
    DescribeHomeRegionControlsXAmzTargetEnum["AwsMigrationHubMultiAccountServiceDescribeHomeRegionControls"] = "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls";
})(DescribeHomeRegionControlsXAmzTargetEnum || (DescribeHomeRegionControlsXAmzTargetEnum = {}));
var DescribeHomeRegionControlsHeaders = /** @class */ (function (_super) {
    __extends(DescribeHomeRegionControlsHeaders, _super);
    function DescribeHomeRegionControlsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeHomeRegionControlsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeHomeRegionControlsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeHomeRegionControlsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeHomeRegionControlsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeHomeRegionControlsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeHomeRegionControlsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeHomeRegionControlsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeHomeRegionControlsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeHomeRegionControlsHeaders;
}(SpeakeasyBase));
export { DescribeHomeRegionControlsHeaders };
var DescribeHomeRegionControlsRequest = /** @class */ (function (_super) {
    __extends(DescribeHomeRegionControlsRequest, _super);
    function DescribeHomeRegionControlsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeHomeRegionControlsQueryParams)
    ], DescribeHomeRegionControlsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeHomeRegionControlsHeaders)
    ], DescribeHomeRegionControlsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeHomeRegionControlsRequest)
    ], DescribeHomeRegionControlsRequest.prototype, "request", void 0);
    return DescribeHomeRegionControlsRequest;
}(SpeakeasyBase));
export { DescribeHomeRegionControlsRequest };
var DescribeHomeRegionControlsResponse = /** @class */ (function (_super) {
    __extends(DescribeHomeRegionControlsResponse, _super);
    function DescribeHomeRegionControlsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeHomeRegionControlsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeHomeRegionControlsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeHomeRegionControlsResult)
    ], DescribeHomeRegionControlsResponse.prototype, "describeHomeRegionControlsResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeHomeRegionControlsResponse.prototype, "internalServerError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeHomeRegionControlsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeHomeRegionControlsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeHomeRegionControlsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeHomeRegionControlsResponse.prototype, "throttlingException", void 0);
    return DescribeHomeRegionControlsResponse;
}(SpeakeasyBase));
export { DescribeHomeRegionControlsResponse };
