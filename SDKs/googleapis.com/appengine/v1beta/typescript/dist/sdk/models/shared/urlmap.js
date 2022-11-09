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
import { ApiEndpointHandler } from "./apiendpointhandler";
import { ScriptHandler } from "./scripthandler";
import { StaticFilesHandler } from "./staticfileshandler";
export var UrlMapAuthFailActionEnum;
(function (UrlMapAuthFailActionEnum) {
    UrlMapAuthFailActionEnum["AuthFailActionUnspecified"] = "AUTH_FAIL_ACTION_UNSPECIFIED";
    UrlMapAuthFailActionEnum["AuthFailActionRedirect"] = "AUTH_FAIL_ACTION_REDIRECT";
    UrlMapAuthFailActionEnum["AuthFailActionUnauthorized"] = "AUTH_FAIL_ACTION_UNAUTHORIZED";
})(UrlMapAuthFailActionEnum || (UrlMapAuthFailActionEnum = {}));
export var UrlMapLoginEnum;
(function (UrlMapLoginEnum) {
    UrlMapLoginEnum["LoginUnspecified"] = "LOGIN_UNSPECIFIED";
    UrlMapLoginEnum["LoginOptional"] = "LOGIN_OPTIONAL";
    UrlMapLoginEnum["LoginAdmin"] = "LOGIN_ADMIN";
    UrlMapLoginEnum["LoginRequired"] = "LOGIN_REQUIRED";
})(UrlMapLoginEnum || (UrlMapLoginEnum = {}));
export var UrlMapRedirectHttpResponseCodeEnum;
(function (UrlMapRedirectHttpResponseCodeEnum) {
    UrlMapRedirectHttpResponseCodeEnum["RedirectHttpResponseCodeUnspecified"] = "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED";
    UrlMapRedirectHttpResponseCodeEnum["RedirectHttpResponseCode301"] = "REDIRECT_HTTP_RESPONSE_CODE_301";
    UrlMapRedirectHttpResponseCodeEnum["RedirectHttpResponseCode302"] = "REDIRECT_HTTP_RESPONSE_CODE_302";
    UrlMapRedirectHttpResponseCodeEnum["RedirectHttpResponseCode303"] = "REDIRECT_HTTP_RESPONSE_CODE_303";
    UrlMapRedirectHttpResponseCodeEnum["RedirectHttpResponseCode307"] = "REDIRECT_HTTP_RESPONSE_CODE_307";
})(UrlMapRedirectHttpResponseCodeEnum || (UrlMapRedirectHttpResponseCodeEnum = {}));
export var UrlMapSecurityLevelEnum;
(function (UrlMapSecurityLevelEnum) {
    UrlMapSecurityLevelEnum["SecureUnspecified"] = "SECURE_UNSPECIFIED";
    UrlMapSecurityLevelEnum["SecureDefault"] = "SECURE_DEFAULT";
    UrlMapSecurityLevelEnum["SecureNever"] = "SECURE_NEVER";
    UrlMapSecurityLevelEnum["SecureOptional"] = "SECURE_OPTIONAL";
    UrlMapSecurityLevelEnum["SecureAlways"] = "SECURE_ALWAYS";
})(UrlMapSecurityLevelEnum || (UrlMapSecurityLevelEnum = {}));
// UrlMap
/**
 * URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript.
**/
var UrlMap = /** @class */ (function (_super) {
    __extends(UrlMap, _super);
    function UrlMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=apiEndpoint" }),
        __metadata("design:type", ApiEndpointHandler)
    ], UrlMap.prototype, "apiEndpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=authFailAction" }),
        __metadata("design:type", String)
    ], UrlMap.prototype, "authFailAction", void 0);
    __decorate([
        Metadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], UrlMap.prototype, "login", void 0);
    __decorate([
        Metadata({ data: "json, name=redirectHttpResponseCode" }),
        __metadata("design:type", String)
    ], UrlMap.prototype, "redirectHttpResponseCode", void 0);
    __decorate([
        Metadata({ data: "json, name=script" }),
        __metadata("design:type", ScriptHandler)
    ], UrlMap.prototype, "script", void 0);
    __decorate([
        Metadata({ data: "json, name=securityLevel" }),
        __metadata("design:type", String)
    ], UrlMap.prototype, "securityLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=staticFiles" }),
        __metadata("design:type", StaticFilesHandler)
    ], UrlMap.prototype, "staticFiles", void 0);
    __decorate([
        Metadata({ data: "json, name=urlRegex" }),
        __metadata("design:type", String)
    ], UrlMap.prototype, "urlRegex", void 0);
    return UrlMap;
}(SpeakeasyBase));
export { UrlMap };
