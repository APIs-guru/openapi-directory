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
export var GetModelPackageGroupPolicyXAmzTargetEnum;
(function (GetModelPackageGroupPolicyXAmzTargetEnum) {
    GetModelPackageGroupPolicyXAmzTargetEnum["SageMakerGetModelPackageGroupPolicy"] = "SageMaker.GetModelPackageGroupPolicy";
})(GetModelPackageGroupPolicyXAmzTargetEnum || (GetModelPackageGroupPolicyXAmzTargetEnum = {}));
var GetModelPackageGroupPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetModelPackageGroupPolicyHeaders, _super);
    function GetModelPackageGroupPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModelPackageGroupPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModelPackageGroupPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModelPackageGroupPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModelPackageGroupPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModelPackageGroupPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModelPackageGroupPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModelPackageGroupPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetModelPackageGroupPolicyHeaders.prototype, "xAmzTarget", void 0);
    return GetModelPackageGroupPolicyHeaders;
}(SpeakeasyBase));
export { GetModelPackageGroupPolicyHeaders };
var GetModelPackageGroupPolicyRequest = /** @class */ (function (_super) {
    __extends(GetModelPackageGroupPolicyRequest, _super);
    function GetModelPackageGroupPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModelPackageGroupPolicyHeaders)
    ], GetModelPackageGroupPolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetModelPackageGroupPolicyInput)
    ], GetModelPackageGroupPolicyRequest.prototype, "request", void 0);
    return GetModelPackageGroupPolicyRequest;
}(SpeakeasyBase));
export { GetModelPackageGroupPolicyRequest };
var GetModelPackageGroupPolicyResponse = /** @class */ (function (_super) {
    __extends(GetModelPackageGroupPolicyResponse, _super);
    function GetModelPackageGroupPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModelPackageGroupPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetModelPackageGroupPolicyOutput)
    ], GetModelPackageGroupPolicyResponse.prototype, "getModelPackageGroupPolicyOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModelPackageGroupPolicyResponse.prototype, "statusCode", void 0);
    return GetModelPackageGroupPolicyResponse;
}(SpeakeasyBase));
export { GetModelPackageGroupPolicyResponse };
