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
export var GetDefaultRetentionPolicyXAmzTargetEnum;
(function (GetDefaultRetentionPolicyXAmzTargetEnum) {
    GetDefaultRetentionPolicyXAmzTargetEnum["WorkMailServiceGetDefaultRetentionPolicy"] = "WorkMailService.GetDefaultRetentionPolicy";
})(GetDefaultRetentionPolicyXAmzTargetEnum || (GetDefaultRetentionPolicyXAmzTargetEnum = {}));
var GetDefaultRetentionPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetDefaultRetentionPolicyHeaders, _super);
    function GetDefaultRetentionPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDefaultRetentionPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDefaultRetentionPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDefaultRetentionPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDefaultRetentionPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDefaultRetentionPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDefaultRetentionPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDefaultRetentionPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetDefaultRetentionPolicyHeaders.prototype, "xAmzTarget", void 0);
    return GetDefaultRetentionPolicyHeaders;
}(SpeakeasyBase));
export { GetDefaultRetentionPolicyHeaders };
var GetDefaultRetentionPolicyRequest = /** @class */ (function (_super) {
    __extends(GetDefaultRetentionPolicyRequest, _super);
    function GetDefaultRetentionPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDefaultRetentionPolicyHeaders)
    ], GetDefaultRetentionPolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetDefaultRetentionPolicyRequest)
    ], GetDefaultRetentionPolicyRequest.prototype, "request", void 0);
    return GetDefaultRetentionPolicyRequest;
}(SpeakeasyBase));
export { GetDefaultRetentionPolicyRequest };
var GetDefaultRetentionPolicyResponse = /** @class */ (function (_super) {
    __extends(GetDefaultRetentionPolicyResponse, _super);
    function GetDefaultRetentionPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDefaultRetentionPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDefaultRetentionPolicyResponse.prototype, "entityNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetDefaultRetentionPolicyResponse)
    ], GetDefaultRetentionPolicyResponse.prototype, "getDefaultRetentionPolicyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDefaultRetentionPolicyResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDefaultRetentionPolicyResponse.prototype, "organizationNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDefaultRetentionPolicyResponse.prototype, "organizationStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDefaultRetentionPolicyResponse.prototype, "statusCode", void 0);
    return GetDefaultRetentionPolicyResponse;
}(SpeakeasyBase));
export { GetDefaultRetentionPolicyResponse };
