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
var GetUserPathParams = /** @class */ (function (_super) {
    __extends(GetUserPathParams, _super);
    function GetUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetUserPathParams.prototype, "id", void 0);
    return GetUserPathParams;
}(SpeakeasyBase));
export { GetUserPathParams };
var GetUserQueryParams = /** @class */ (function (_super) {
    __extends(GetUserQueryParams, _super);
    function GetUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withStats" }),
        __metadata("design:type", Boolean)
    ], GetUserQueryParams.prototype, "withStats", void 0);
    return GetUserQueryParams;
}(SpeakeasyBase));
export { GetUserQueryParams };
var GetUserSecurity = /** @class */ (function (_super) {
    __extends(GetUserSecurity, _super);
    function GetUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetUserSecurity.prototype, "oAuth2", void 0);
    return GetUserSecurity;
}(SpeakeasyBase));
export { GetUserSecurity };
var GetUserRequest = /** @class */ (function (_super) {
    __extends(GetUserRequest, _super);
    function GetUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserPathParams)
    ], GetUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserQueryParams)
    ], GetUserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserSecurity)
    ], GetUserRequest.prototype, "security", void 0);
    return GetUserRequest;
}(SpeakeasyBase));
export { GetUserRequest };
var GetUserResponse = /** @class */ (function (_super) {
    __extends(GetUserResponse, _super);
    function GetUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUserResponse.prototype, "getUser200ApplicationJsonOneOf", void 0);
    return GetUserResponse;
}(SpeakeasyBase));
export { GetUserResponse };
