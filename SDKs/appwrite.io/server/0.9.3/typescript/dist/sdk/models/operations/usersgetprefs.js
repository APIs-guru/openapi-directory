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
var UsersGetPrefsPathParams = /** @class */ (function (_super) {
    __extends(UsersGetPrefsPathParams, _super);
    function UsersGetPrefsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UsersGetPrefsPathParams.prototype, "userId", void 0);
    return UsersGetPrefsPathParams;
}(SpeakeasyBase));
export { UsersGetPrefsPathParams };
var UsersGetPrefsSecurity = /** @class */ (function (_super) {
    __extends(UsersGetPrefsSecurity, _super);
    function UsersGetPrefsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], UsersGetPrefsSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], UsersGetPrefsSecurity.prototype, "project", void 0);
    return UsersGetPrefsSecurity;
}(SpeakeasyBase));
export { UsersGetPrefsSecurity };
var UsersGetPrefsRequest = /** @class */ (function (_super) {
    __extends(UsersGetPrefsRequest, _super);
    function UsersGetPrefsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UsersGetPrefsPathParams)
    ], UsersGetPrefsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UsersGetPrefsSecurity)
    ], UsersGetPrefsRequest.prototype, "security", void 0);
    return UsersGetPrefsRequest;
}(SpeakeasyBase));
export { UsersGetPrefsRequest };
var UsersGetPrefsResponse = /** @class */ (function (_super) {
    __extends(UsersGetPrefsResponse, _super);
    function UsersGetPrefsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UsersGetPrefsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UsersGetPrefsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], UsersGetPrefsResponse.prototype, "preferences", void 0);
    return UsersGetPrefsResponse;
}(SpeakeasyBase));
export { UsersGetPrefsResponse };
