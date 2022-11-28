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
var EnterpriseAdminSuspendUserPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSuspendUserPathParams, _super);
    function EnterpriseAdminSuspendUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSuspendUserPathParams.prototype, "username", void 0);
    return EnterpriseAdminSuspendUserPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminSuspendUserPathParams };
var EnterpriseAdminSuspendUserRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSuspendUserRequestBody, _super);
    function EnterpriseAdminSuspendUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSuspendUserRequestBody.prototype, "reason", void 0);
    return EnterpriseAdminSuspendUserRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminSuspendUserRequestBody };
var EnterpriseAdminSuspendUserRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSuspendUserRequest, _super);
    function EnterpriseAdminSuspendUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminSuspendUserPathParams)
    ], EnterpriseAdminSuspendUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminSuspendUserRequestBody)
    ], EnterpriseAdminSuspendUserRequest.prototype, "request", void 0);
    return EnterpriseAdminSuspendUserRequest;
}(SpeakeasyBase));
export { EnterpriseAdminSuspendUserRequest };
var EnterpriseAdminSuspendUserResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSuspendUserResponse, _super);
    function EnterpriseAdminSuspendUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminSuspendUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminSuspendUserResponse.prototype, "statusCode", void 0);
    return EnterpriseAdminSuspendUserResponse;
}(SpeakeasyBase));
export { EnterpriseAdminSuspendUserResponse };
