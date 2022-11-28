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
export var DescribeElasticLoadBalancersXAmzTargetEnum;
(function (DescribeElasticLoadBalancersXAmzTargetEnum) {
    DescribeElasticLoadBalancersXAmzTargetEnum["OpsWorks20130218DescribeElasticLoadBalancers"] = "OpsWorks_20130218.DescribeElasticLoadBalancers";
})(DescribeElasticLoadBalancersXAmzTargetEnum || (DescribeElasticLoadBalancersXAmzTargetEnum = {}));
var DescribeElasticLoadBalancersHeaders = /** @class */ (function (_super) {
    __extends(DescribeElasticLoadBalancersHeaders, _super);
    function DescribeElasticLoadBalancersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeElasticLoadBalancersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeElasticLoadBalancersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeElasticLoadBalancersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeElasticLoadBalancersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeElasticLoadBalancersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeElasticLoadBalancersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeElasticLoadBalancersHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeElasticLoadBalancersHeaders.prototype, "xAmzTarget", void 0);
    return DescribeElasticLoadBalancersHeaders;
}(SpeakeasyBase));
export { DescribeElasticLoadBalancersHeaders };
var DescribeElasticLoadBalancersRequest = /** @class */ (function (_super) {
    __extends(DescribeElasticLoadBalancersRequest, _super);
    function DescribeElasticLoadBalancersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeElasticLoadBalancersHeaders)
    ], DescribeElasticLoadBalancersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeElasticLoadBalancersRequest)
    ], DescribeElasticLoadBalancersRequest.prototype, "request", void 0);
    return DescribeElasticLoadBalancersRequest;
}(SpeakeasyBase));
export { DescribeElasticLoadBalancersRequest };
var DescribeElasticLoadBalancersResponse = /** @class */ (function (_super) {
    __extends(DescribeElasticLoadBalancersResponse, _super);
    function DescribeElasticLoadBalancersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeElasticLoadBalancersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeElasticLoadBalancersResult)
    ], DescribeElasticLoadBalancersResponse.prototype, "describeElasticLoadBalancersResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeElasticLoadBalancersResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeElasticLoadBalancersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeElasticLoadBalancersResponse.prototype, "validationException", void 0);
    return DescribeElasticLoadBalancersResponse;
}(SpeakeasyBase));
export { DescribeElasticLoadBalancersResponse };
