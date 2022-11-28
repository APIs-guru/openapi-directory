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
// OidcConfig
/**
 * Use this parameter to configure your OIDC Identity Provider (IdP).
**/
var OidcConfig = /** @class */ (function (_super) {
    __extends(OidcConfig, _super);
    function OidcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorizationEndpoint" }),
        __metadata("design:type", String)
    ], OidcConfig.prototype, "authorizationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientId" }),
        __metadata("design:type", String)
    ], OidcConfig.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientSecret" }),
        __metadata("design:type", String)
    ], OidcConfig.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Issuer" }),
        __metadata("design:type", String)
    ], OidcConfig.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JwksUri" }),
        __metadata("design:type", String)
    ], OidcConfig.prototype, "jwksUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogoutEndpoint" }),
        __metadata("design:type", String)
    ], OidcConfig.prototype, "logoutEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TokenEndpoint" }),
        __metadata("design:type", String)
    ], OidcConfig.prototype, "tokenEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserInfoEndpoint" }),
        __metadata("design:type", String)
    ], OidcConfig.prototype, "userInfoEndpoint", void 0);
    return OidcConfig;
}(SpeakeasyBase));
export { OidcConfig };
