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
var DescribeSubscriptionFiltersQueryParams = /** @class */ (function (_super) {
    __extends(DescribeSubscriptionFiltersQueryParams, _super);
    function DescribeSubscriptionFiltersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], DescribeSubscriptionFiltersQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeSubscriptionFiltersQueryParams.prototype, "nextToken", void 0);
    return DescribeSubscriptionFiltersQueryParams;
}(SpeakeasyBase));
export { DescribeSubscriptionFiltersQueryParams };
export var DescribeSubscriptionFiltersXAmzTargetEnum;
(function (DescribeSubscriptionFiltersXAmzTargetEnum) {
    DescribeSubscriptionFiltersXAmzTargetEnum["Logs20140328DescribeSubscriptionFilters"] = "Logs_20140328.DescribeSubscriptionFilters";
})(DescribeSubscriptionFiltersXAmzTargetEnum || (DescribeSubscriptionFiltersXAmzTargetEnum = {}));
var DescribeSubscriptionFiltersHeaders = /** @class */ (function (_super) {
    __extends(DescribeSubscriptionFiltersHeaders, _super);
    function DescribeSubscriptionFiltersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeSubscriptionFiltersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeSubscriptionFiltersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeSubscriptionFiltersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeSubscriptionFiltersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeSubscriptionFiltersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeSubscriptionFiltersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeSubscriptionFiltersHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeSubscriptionFiltersHeaders.prototype, "xAmzTarget", void 0);
    return DescribeSubscriptionFiltersHeaders;
}(SpeakeasyBase));
export { DescribeSubscriptionFiltersHeaders };
var DescribeSubscriptionFiltersRequest = /** @class */ (function (_super) {
    __extends(DescribeSubscriptionFiltersRequest, _super);
    function DescribeSubscriptionFiltersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeSubscriptionFiltersQueryParams)
    ], DescribeSubscriptionFiltersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeSubscriptionFiltersHeaders)
    ], DescribeSubscriptionFiltersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeSubscriptionFiltersRequest)
    ], DescribeSubscriptionFiltersRequest.prototype, "request", void 0);
    return DescribeSubscriptionFiltersRequest;
}(SpeakeasyBase));
export { DescribeSubscriptionFiltersRequest };
var DescribeSubscriptionFiltersResponse = /** @class */ (function (_super) {
    __extends(DescribeSubscriptionFiltersResponse, _super);
    function DescribeSubscriptionFiltersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeSubscriptionFiltersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeSubscriptionFiltersResponse)
    ], DescribeSubscriptionFiltersResponse.prototype, "describeSubscriptionFiltersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeSubscriptionFiltersResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeSubscriptionFiltersResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeSubscriptionFiltersResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeSubscriptionFiltersResponse.prototype, "statusCode", void 0);
    return DescribeSubscriptionFiltersResponse;
}(SpeakeasyBase));
export { DescribeSubscriptionFiltersResponse };
