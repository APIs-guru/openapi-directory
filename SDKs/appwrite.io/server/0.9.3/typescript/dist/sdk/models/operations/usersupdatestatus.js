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
var UsersUpdateStatusPathParams = /** @class */ (function (_super) {
    __extends(UsersUpdateStatusPathParams, _super);
    function UsersUpdateStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UsersUpdateStatusPathParams.prototype, "userId", void 0);
    return UsersUpdateStatusPathParams;
}(SpeakeasyBase));
export { UsersUpdateStatusPathParams };
var UsersUpdateStatusRequestBody = /** @class */ (function (_super) {
    __extends(UsersUpdateStatusRequestBody, _super);
    function UsersUpdateStatusRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UsersUpdateStatusRequestBody.prototype, "status", void 0);
    return UsersUpdateStatusRequestBody;
}(SpeakeasyBase));
export { UsersUpdateStatusRequestBody };
var UsersUpdateStatusSecurity = /** @class */ (function (_super) {
    __extends(UsersUpdateStatusSecurity, _super);
    function UsersUpdateStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], UsersUpdateStatusSecurity.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], UsersUpdateStatusSecurity.prototype, "project", void 0);
    return UsersUpdateStatusSecurity;
}(SpeakeasyBase));
export { UsersUpdateStatusSecurity };
var UsersUpdateStatusRequest = /** @class */ (function (_super) {
    __extends(UsersUpdateStatusRequest, _super);
    function UsersUpdateStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersUpdateStatusPathParams)
    ], UsersUpdateStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UsersUpdateStatusRequestBody)
    ], UsersUpdateStatusRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersUpdateStatusSecurity)
    ], UsersUpdateStatusRequest.prototype, "security", void 0);
    return UsersUpdateStatusRequest;
}(SpeakeasyBase));
export { UsersUpdateStatusRequest };
var UsersUpdateStatusResponse = /** @class */ (function (_super) {
    __extends(UsersUpdateStatusResponse, _super);
    function UsersUpdateStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersUpdateStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersUpdateStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.User)
    ], UsersUpdateStatusResponse.prototype, "user", void 0);
    return UsersUpdateStatusResponse;
}(SpeakeasyBase));
export { UsersUpdateStatusResponse };
