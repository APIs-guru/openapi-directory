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
export var DeleteLifecyclePolicyXAmzTargetEnum;
(function (DeleteLifecyclePolicyXAmzTargetEnum) {
    DeleteLifecyclePolicyXAmzTargetEnum["MediaStore20170901DeleteLifecyclePolicy"] = "MediaStore_20170901.DeleteLifecyclePolicy";
})(DeleteLifecyclePolicyXAmzTargetEnum || (DeleteLifecyclePolicyXAmzTargetEnum = {}));
var DeleteLifecyclePolicyHeaders = /** @class */ (function (_super) {
    __extends(DeleteLifecyclePolicyHeaders, _super);
    function DeleteLifecyclePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteLifecyclePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteLifecyclePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteLifecyclePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteLifecyclePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteLifecyclePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteLifecyclePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteLifecyclePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteLifecyclePolicyHeaders.prototype, "xAmzTarget", void 0);
    return DeleteLifecyclePolicyHeaders;
}(SpeakeasyBase));
export { DeleteLifecyclePolicyHeaders };
var DeleteLifecyclePolicyRequest = /** @class */ (function (_super) {
    __extends(DeleteLifecyclePolicyRequest, _super);
    function DeleteLifecyclePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteLifecyclePolicyHeaders)
    ], DeleteLifecyclePolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteLifecyclePolicyInput)
    ], DeleteLifecyclePolicyRequest.prototype, "request", void 0);
    return DeleteLifecyclePolicyRequest;
}(SpeakeasyBase));
export { DeleteLifecyclePolicyRequest };
var DeleteLifecyclePolicyResponse = /** @class */ (function (_super) {
    __extends(DeleteLifecyclePolicyResponse, _super);
    function DeleteLifecyclePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteLifecyclePolicyResponse.prototype, "containerInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteLifecyclePolicyResponse.prototype, "containerNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteLifecyclePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DeleteLifecyclePolicyResponse.prototype, "deleteLifecyclePolicyOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteLifecyclePolicyResponse.prototype, "internalServerError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteLifecyclePolicyResponse.prototype, "policyNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteLifecyclePolicyResponse.prototype, "statusCode", void 0);
    return DeleteLifecyclePolicyResponse;
}(SpeakeasyBase));
export { DeleteLifecyclePolicyResponse };
