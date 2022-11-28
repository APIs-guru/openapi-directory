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
var EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams, _super);
    function EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams.prototype, "enterprise", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams.prototype, "scimUserId", void 0);
    return EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams };
var EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody, _super);
    function EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Operations" }),
        __metadata("design:type", Array)
    ], EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody.prototype, "operations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody.prototype, "schemas", void 0);
    return EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody };
var EnterpriseAdminUpdateAttributeForEnterpriseUserRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateAttributeForEnterpriseUserRequest, _super);
    function EnterpriseAdminUpdateAttributeForEnterpriseUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams)
    ], EnterpriseAdminUpdateAttributeForEnterpriseUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody)
    ], EnterpriseAdminUpdateAttributeForEnterpriseUserRequest.prototype, "request", void 0);
    return EnterpriseAdminUpdateAttributeForEnterpriseUserRequest;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateAttributeForEnterpriseUserRequest };
var EnterpriseAdminUpdateAttributeForEnterpriseUserResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateAttributeForEnterpriseUserResponse, _super);
    function EnterpriseAdminUpdateAttributeForEnterpriseUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateAttributeForEnterpriseUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminUpdateAttributeForEnterpriseUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimEnterpriseUser)
    ], EnterpriseAdminUpdateAttributeForEnterpriseUserResponse.prototype, "scimEnterpriseUser", void 0);
    return EnterpriseAdminUpdateAttributeForEnterpriseUserResponse;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateAttributeForEnterpriseUserResponse };
