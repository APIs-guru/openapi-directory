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
var GetEmailIdentityPoliciesPathParams = /** @class */ (function (_super) {
    __extends(GetEmailIdentityPoliciesPathParams, _super);
    function GetEmailIdentityPoliciesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" }),
        __metadata("design:type", String)
    ], GetEmailIdentityPoliciesPathParams.prototype, "emailIdentity", void 0);
    return GetEmailIdentityPoliciesPathParams;
}(SpeakeasyBase));
export { GetEmailIdentityPoliciesPathParams };
var GetEmailIdentityPoliciesHeaders = /** @class */ (function (_super) {
    __extends(GetEmailIdentityPoliciesHeaders, _super);
    function GetEmailIdentityPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEmailIdentityPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEmailIdentityPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEmailIdentityPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEmailIdentityPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEmailIdentityPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEmailIdentityPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEmailIdentityPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEmailIdentityPoliciesHeaders;
}(SpeakeasyBase));
export { GetEmailIdentityPoliciesHeaders };
var GetEmailIdentityPoliciesRequest = /** @class */ (function (_super) {
    __extends(GetEmailIdentityPoliciesRequest, _super);
    function GetEmailIdentityPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEmailIdentityPoliciesPathParams)
    ], GetEmailIdentityPoliciesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEmailIdentityPoliciesHeaders)
    ], GetEmailIdentityPoliciesRequest.prototype, "headers", void 0);
    return GetEmailIdentityPoliciesRequest;
}(SpeakeasyBase));
export { GetEmailIdentityPoliciesRequest };
var GetEmailIdentityPoliciesResponse = /** @class */ (function (_super) {
    __extends(GetEmailIdentityPoliciesResponse, _super);
    function GetEmailIdentityPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEmailIdentityPoliciesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEmailIdentityPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetEmailIdentityPoliciesResponse)
    ], GetEmailIdentityPoliciesResponse.prototype, "getEmailIdentityPoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEmailIdentityPoliciesResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEmailIdentityPoliciesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEmailIdentityPoliciesResponse.prototype, "tooManyRequestsException", void 0);
    return GetEmailIdentityPoliciesResponse;
}(SpeakeasyBase));
export { GetEmailIdentityPoliciesResponse };
