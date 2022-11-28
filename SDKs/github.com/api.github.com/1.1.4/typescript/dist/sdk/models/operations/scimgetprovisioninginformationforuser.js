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
var ScimGetProvisioningInformationForUserPathParams = /** @class */ (function (_super) {
    __extends(ScimGetProvisioningInformationForUserPathParams, _super);
    function ScimGetProvisioningInformationForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ScimGetProvisioningInformationForUserPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" }),
        __metadata("design:type", String)
    ], ScimGetProvisioningInformationForUserPathParams.prototype, "scimUserId", void 0);
    return ScimGetProvisioningInformationForUserPathParams;
}(SpeakeasyBase));
export { ScimGetProvisioningInformationForUserPathParams };
var ScimGetProvisioningInformationForUserRequest = /** @class */ (function (_super) {
    __extends(ScimGetProvisioningInformationForUserRequest, _super);
    function ScimGetProvisioningInformationForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScimGetProvisioningInformationForUserPathParams)
    ], ScimGetProvisioningInformationForUserRequest.prototype, "pathParams", void 0);
    return ScimGetProvisioningInformationForUserRequest;
}(SpeakeasyBase));
export { ScimGetProvisioningInformationForUserRequest };
var ScimGetProvisioningInformationForUserResponse = /** @class */ (function (_super) {
    __extends(ScimGetProvisioningInformationForUserResponse, _super);
    function ScimGetProvisioningInformationForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScimGetProvisioningInformationForUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScimGetProvisioningInformationForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimError)
    ], ScimGetProvisioningInformationForUserResponse.prototype, "scimError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimUser)
    ], ScimGetProvisioningInformationForUserResponse.prototype, "scimUser", void 0);
    return ScimGetProvisioningInformationForUserResponse;
}(SpeakeasyBase));
export { ScimGetProvisioningInformationForUserResponse };
