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
export var EnableDomainAutoRenewXAmzTargetEnum;
(function (EnableDomainAutoRenewXAmzTargetEnum) {
    EnableDomainAutoRenewXAmzTargetEnum["Route53DomainsV20140515EnableDomainAutoRenew"] = "Route53Domains_v20140515.EnableDomainAutoRenew";
})(EnableDomainAutoRenewXAmzTargetEnum || (EnableDomainAutoRenewXAmzTargetEnum = {}));
var EnableDomainAutoRenewHeaders = /** @class */ (function (_super) {
    __extends(EnableDomainAutoRenewHeaders, _super);
    function EnableDomainAutoRenewHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], EnableDomainAutoRenewHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], EnableDomainAutoRenewHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], EnableDomainAutoRenewHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], EnableDomainAutoRenewHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], EnableDomainAutoRenewHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], EnableDomainAutoRenewHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], EnableDomainAutoRenewHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], EnableDomainAutoRenewHeaders.prototype, "xAmzTarget", void 0);
    return EnableDomainAutoRenewHeaders;
}(SpeakeasyBase));
export { EnableDomainAutoRenewHeaders };
var EnableDomainAutoRenewRequest = /** @class */ (function (_super) {
    __extends(EnableDomainAutoRenewRequest, _super);
    function EnableDomainAutoRenewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnableDomainAutoRenewHeaders)
    ], EnableDomainAutoRenewRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EnableDomainAutoRenewRequest)
    ], EnableDomainAutoRenewRequest.prototype, "request", void 0);
    return EnableDomainAutoRenewRequest;
}(SpeakeasyBase));
export { EnableDomainAutoRenewRequest };
var EnableDomainAutoRenewResponse = /** @class */ (function (_super) {
    __extends(EnableDomainAutoRenewResponse, _super);
    function EnableDomainAutoRenewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnableDomainAutoRenewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], EnableDomainAutoRenewResponse.prototype, "enableDomainAutoRenewResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], EnableDomainAutoRenewResponse.prototype, "invalidInput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnableDomainAutoRenewResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], EnableDomainAutoRenewResponse.prototype, "tldRulesViolation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], EnableDomainAutoRenewResponse.prototype, "unsupportedTld", void 0);
    return EnableDomainAutoRenewResponse;
}(SpeakeasyBase));
export { EnableDomainAutoRenewResponse };
