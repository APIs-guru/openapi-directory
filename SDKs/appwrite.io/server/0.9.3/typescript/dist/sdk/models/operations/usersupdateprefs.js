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
var UsersUpdatePrefsPathParams = /** @class */ (function (_super) {
    __extends(UsersUpdatePrefsPathParams, _super);
    function UsersUpdatePrefsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UsersUpdatePrefsPathParams.prototype, "userId", void 0);
    return UsersUpdatePrefsPathParams;
}(SpeakeasyBase));
export { UsersUpdatePrefsPathParams };
var UsersUpdatePrefsRequestBody = /** @class */ (function (_super) {
    __extends(UsersUpdatePrefsRequestBody, _super);
    function UsersUpdatePrefsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefs" }),
        __metadata("design:type", Map)
    ], UsersUpdatePrefsRequestBody.prototype, "prefs", void 0);
    return UsersUpdatePrefsRequestBody;
}(SpeakeasyBase));
export { UsersUpdatePrefsRequestBody };
var UsersUpdatePrefsSecurity = /** @class */ (function (_super) {
    __extends(UsersUpdatePrefsSecurity, _super);
    function UsersUpdatePrefsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], UsersUpdatePrefsSecurity.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], UsersUpdatePrefsSecurity.prototype, "project", void 0);
    return UsersUpdatePrefsSecurity;
}(SpeakeasyBase));
export { UsersUpdatePrefsSecurity };
var UsersUpdatePrefsRequest = /** @class */ (function (_super) {
    __extends(UsersUpdatePrefsRequest, _super);
    function UsersUpdatePrefsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersUpdatePrefsPathParams)
    ], UsersUpdatePrefsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UsersUpdatePrefsRequestBody)
    ], UsersUpdatePrefsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersUpdatePrefsSecurity)
    ], UsersUpdatePrefsRequest.prototype, "security", void 0);
    return UsersUpdatePrefsRequest;
}(SpeakeasyBase));
export { UsersUpdatePrefsRequest };
var UsersUpdatePrefsResponse = /** @class */ (function (_super) {
    __extends(UsersUpdatePrefsResponse, _super);
    function UsersUpdatePrefsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersUpdatePrefsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersUpdatePrefsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UsersUpdatePrefsResponse.prototype, "preferences", void 0);
    return UsersUpdatePrefsResponse;
}(SpeakeasyBase));
export { UsersUpdatePrefsResponse };
