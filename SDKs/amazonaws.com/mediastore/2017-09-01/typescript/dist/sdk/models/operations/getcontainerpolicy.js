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
export var GetContainerPolicyXAmzTargetEnum;
(function (GetContainerPolicyXAmzTargetEnum) {
    GetContainerPolicyXAmzTargetEnum["MediaStore20170901GetContainerPolicy"] = "MediaStore_20170901.GetContainerPolicy";
})(GetContainerPolicyXAmzTargetEnum || (GetContainerPolicyXAmzTargetEnum = {}));
var GetContainerPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetContainerPolicyHeaders, _super);
    function GetContainerPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetContainerPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetContainerPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetContainerPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetContainerPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetContainerPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetContainerPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetContainerPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetContainerPolicyHeaders.prototype, "xAmzTarget", void 0);
    return GetContainerPolicyHeaders;
}(SpeakeasyBase));
export { GetContainerPolicyHeaders };
var GetContainerPolicyRequest = /** @class */ (function (_super) {
    __extends(GetContainerPolicyRequest, _super);
    function GetContainerPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetContainerPolicyHeaders)
    ], GetContainerPolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetContainerPolicyInput)
    ], GetContainerPolicyRequest.prototype, "request", void 0);
    return GetContainerPolicyRequest;
}(SpeakeasyBase));
export { GetContainerPolicyRequest };
var GetContainerPolicyResponse = /** @class */ (function (_super) {
    __extends(GetContainerPolicyResponse, _super);
    function GetContainerPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainerPolicyResponse.prototype, "containerInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainerPolicyResponse.prototype, "containerNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetContainerPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetContainerPolicyOutput)
    ], GetContainerPolicyResponse.prototype, "getContainerPolicyOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainerPolicyResponse.prototype, "internalServerError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainerPolicyResponse.prototype, "policyNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetContainerPolicyResponse.prototype, "statusCode", void 0);
    return GetContainerPolicyResponse;
}(SpeakeasyBase));
export { GetContainerPolicyResponse };
