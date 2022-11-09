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
var UsersDeleteSessionPathParams = /** @class */ (function (_super) {
    __extends(UsersDeleteSessionPathParams, _super);
    function UsersDeleteSessionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], UsersDeleteSessionPathParams.prototype, "sessionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UsersDeleteSessionPathParams.prototype, "userId", void 0);
    return UsersDeleteSessionPathParams;
}(SpeakeasyBase));
export { UsersDeleteSessionPathParams };
var UsersDeleteSessionSecurity = /** @class */ (function (_super) {
    __extends(UsersDeleteSessionSecurity, _super);
    function UsersDeleteSessionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], UsersDeleteSessionSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], UsersDeleteSessionSecurity.prototype, "project", void 0);
    return UsersDeleteSessionSecurity;
}(SpeakeasyBase));
export { UsersDeleteSessionSecurity };
var UsersDeleteSessionRequest = /** @class */ (function (_super) {
    __extends(UsersDeleteSessionRequest, _super);
    function UsersDeleteSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UsersDeleteSessionPathParams)
    ], UsersDeleteSessionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UsersDeleteSessionSecurity)
    ], UsersDeleteSessionRequest.prototype, "security", void 0);
    return UsersDeleteSessionRequest;
}(SpeakeasyBase));
export { UsersDeleteSessionRequest };
var UsersDeleteSessionResponse = /** @class */ (function (_super) {
    __extends(UsersDeleteSessionResponse, _super);
    function UsersDeleteSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UsersDeleteSessionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UsersDeleteSessionResponse.prototype, "statusCode", void 0);
    return UsersDeleteSessionResponse;
}(SpeakeasyBase));
export { UsersDeleteSessionResponse };
