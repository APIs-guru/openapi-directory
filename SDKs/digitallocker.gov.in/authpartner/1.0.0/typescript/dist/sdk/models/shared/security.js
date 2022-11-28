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
var SchemeOauthAuthorizeCode = /** @class */ (function (_super) {
    __extends(SchemeOauthAuthorizeCode, _super);
    function SchemeOauthAuthorizeCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, name=Authorization" }),
        __metadata("design:type", String)
    ], SchemeOauthAuthorizeCode.prototype, "authorization", void 0);
    return SchemeOauthAuthorizeCode;
}(SpeakeasyBase));
export { SchemeOauthAuthorizeCode };
var SchemeOauthsecurity = /** @class */ (function (_super) {
    __extends(SchemeOauthsecurity, _super);
    function SchemeOauthsecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, name=Authorization" }),
        __metadata("design:type", String)
    ], SchemeOauthsecurity.prototype, "authorization", void 0);
    return SchemeOauthsecurity;
}(SpeakeasyBase));
export { SchemeOauthsecurity };
var SchemeCustomkey2 = /** @class */ (function (_super) {
    __extends(SchemeCustomkey2, _super);
    function SchemeCustomkey2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, name=X-2" }),
        __metadata("design:type", String)
    ], SchemeCustomkey2.prototype, "apiKey", void 0);
    return SchemeCustomkey2;
}(SpeakeasyBase));
export { SchemeCustomkey2 };
var SchemeCustomkeys1 = /** @class */ (function (_super) {
    __extends(SchemeCustomkeys1, _super);
    function SchemeCustomkeys1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, name=X1123" }),
        __metadata("design:type", String)
    ], SchemeCustomkeys1.prototype, "apiKey", void 0);
    return SchemeCustomkeys1;
}(SpeakeasyBase));
export { SchemeCustomkeys1 };
var SchemeBearerAuth = /** @class */ (function (_super) {
    __extends(SchemeBearerAuth, _super);
    function SchemeBearerAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, name=Authorization" }),
        __metadata("design:type", String)
    ], SchemeBearerAuth.prototype, "authorization", void 0);
    return SchemeBearerAuth;
}(SpeakeasyBase));
export { SchemeBearerAuth };
