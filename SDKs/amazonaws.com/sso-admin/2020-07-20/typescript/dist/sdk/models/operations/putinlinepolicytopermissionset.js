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
export var PutInlinePolicyToPermissionSetXAmzTargetEnum;
(function (PutInlinePolicyToPermissionSetXAmzTargetEnum) {
    PutInlinePolicyToPermissionSetXAmzTargetEnum["SwbExternalServicePutInlinePolicyToPermissionSet"] = "SWBExternalService.PutInlinePolicyToPermissionSet";
})(PutInlinePolicyToPermissionSetXAmzTargetEnum || (PutInlinePolicyToPermissionSetXAmzTargetEnum = {}));
var PutInlinePolicyToPermissionSetHeaders = /** @class */ (function (_super) {
    __extends(PutInlinePolicyToPermissionSetHeaders, _super);
    function PutInlinePolicyToPermissionSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutInlinePolicyToPermissionSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutInlinePolicyToPermissionSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutInlinePolicyToPermissionSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutInlinePolicyToPermissionSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutInlinePolicyToPermissionSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutInlinePolicyToPermissionSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutInlinePolicyToPermissionSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], PutInlinePolicyToPermissionSetHeaders.prototype, "xAmzTarget", void 0);
    return PutInlinePolicyToPermissionSetHeaders;
}(SpeakeasyBase));
export { PutInlinePolicyToPermissionSetHeaders };
var PutInlinePolicyToPermissionSetRequest = /** @class */ (function (_super) {
    __extends(PutInlinePolicyToPermissionSetRequest, _super);
    function PutInlinePolicyToPermissionSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutInlinePolicyToPermissionSetHeaders)
    ], PutInlinePolicyToPermissionSetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PutInlinePolicyToPermissionSetRequest)
    ], PutInlinePolicyToPermissionSetRequest.prototype, "request", void 0);
    return PutInlinePolicyToPermissionSetRequest;
}(SpeakeasyBase));
export { PutInlinePolicyToPermissionSetRequest };
var PutInlinePolicyToPermissionSetResponse = /** @class */ (function (_super) {
    __extends(PutInlinePolicyToPermissionSetResponse, _super);
    function PutInlinePolicyToPermissionSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutInlinePolicyToPermissionSetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutInlinePolicyToPermissionSetResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutInlinePolicyToPermissionSetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutInlinePolicyToPermissionSetResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutInlinePolicyToPermissionSetResponse.prototype, "putInlinePolicyToPermissionSetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutInlinePolicyToPermissionSetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutInlinePolicyToPermissionSetResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutInlinePolicyToPermissionSetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutInlinePolicyToPermissionSetResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutInlinePolicyToPermissionSetResponse.prototype, "validationException", void 0);
    return PutInlinePolicyToPermissionSetResponse;
}(SpeakeasyBase));
export { PutInlinePolicyToPermissionSetResponse };
