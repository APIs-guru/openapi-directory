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
export var UpdateFirewallPolicyChangeProtectionXAmzTargetEnum;
(function (UpdateFirewallPolicyChangeProtectionXAmzTargetEnum) {
    UpdateFirewallPolicyChangeProtectionXAmzTargetEnum["NetworkFirewall20201112UpdateFirewallPolicyChangeProtection"] = "NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection";
})(UpdateFirewallPolicyChangeProtectionXAmzTargetEnum || (UpdateFirewallPolicyChangeProtectionXAmzTargetEnum = {}));
var UpdateFirewallPolicyChangeProtectionHeaders = /** @class */ (function (_super) {
    __extends(UpdateFirewallPolicyChangeProtectionHeaders, _super);
    function UpdateFirewallPolicyChangeProtectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFirewallPolicyChangeProtectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFirewallPolicyChangeProtectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFirewallPolicyChangeProtectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFirewallPolicyChangeProtectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFirewallPolicyChangeProtectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFirewallPolicyChangeProtectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFirewallPolicyChangeProtectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateFirewallPolicyChangeProtectionHeaders.prototype, "xAmzTarget", void 0);
    return UpdateFirewallPolicyChangeProtectionHeaders;
}(SpeakeasyBase));
export { UpdateFirewallPolicyChangeProtectionHeaders };
var UpdateFirewallPolicyChangeProtectionRequest = /** @class */ (function (_super) {
    __extends(UpdateFirewallPolicyChangeProtectionRequest, _super);
    function UpdateFirewallPolicyChangeProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFirewallPolicyChangeProtectionHeaders)
    ], UpdateFirewallPolicyChangeProtectionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateFirewallPolicyChangeProtectionRequest)
    ], UpdateFirewallPolicyChangeProtectionRequest.prototype, "request", void 0);
    return UpdateFirewallPolicyChangeProtectionRequest;
}(SpeakeasyBase));
export { UpdateFirewallPolicyChangeProtectionRequest };
var UpdateFirewallPolicyChangeProtectionResponse = /** @class */ (function (_super) {
    __extends(UpdateFirewallPolicyChangeProtectionResponse, _super);
    function UpdateFirewallPolicyChangeProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFirewallPolicyChangeProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFirewallPolicyChangeProtectionResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFirewallPolicyChangeProtectionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFirewallPolicyChangeProtectionResponse.prototype, "invalidTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFirewallPolicyChangeProtectionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFirewallPolicyChangeProtectionResponse.prototype, "resourceOwnerCheckException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFirewallPolicyChangeProtectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFirewallPolicyChangeProtectionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateFirewallPolicyChangeProtectionResponse)
    ], UpdateFirewallPolicyChangeProtectionResponse.prototype, "updateFirewallPolicyChangeProtectionResponse", void 0);
    return UpdateFirewallPolicyChangeProtectionResponse;
}(SpeakeasyBase));
export { UpdateFirewallPolicyChangeProtectionResponse };
