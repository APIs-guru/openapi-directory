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
export var OAuthTokenPasswordGrantTypeEnum;
(function (OAuthTokenPasswordGrantTypeEnum) {
    OAuthTokenPasswordGrantTypeEnum["Password"] = "password";
    OAuthTokenPasswordGrantTypeEnum["RefreshToken"] = "refresh_token";
})(OAuthTokenPasswordGrantTypeEnum || (OAuthTokenPasswordGrantTypeEnum = {}));
var OAuthTokenPassword = /** @class */ (function (_super) {
    __extends(OAuthTokenPassword, _super);
    function OAuthTokenPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=client_id;" }),
        __metadata("design:type", String)
    ], OAuthTokenPassword.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=client_secret;" }),
        __metadata("design:type", String)
    ], OAuthTokenPassword.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=grant_type;" }),
        __metadata("design:type", String)
    ], OAuthTokenPassword.prototype, "grantType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=password;" }),
        __metadata("design:type", String)
    ], OAuthTokenPassword.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=username;" }),
        __metadata("design:type", String)
    ], OAuthTokenPassword.prototype, "username", void 0);
    return OAuthTokenPassword;
}(SpeakeasyBase));
export { OAuthTokenPassword };
