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
var ConnectionImportDataCredentials = /** @class */ (function (_super) {
    __extends(ConnectionImportDataCredentials, _super);
    function ConnectionImportDataCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], ConnectionImportDataCredentials.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "json, name=expires_in" }),
        __metadata("design:type", Number)
    ], ConnectionImportDataCredentials.prototype, "expiresIn", void 0);
    __decorate([
        Metadata({ data: "json, name=issued_at" }),
        __metadata("design:type", Date)
    ], ConnectionImportDataCredentials.prototype, "issuedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=refresh_token" }),
        __metadata("design:type", String)
    ], ConnectionImportDataCredentials.prototype, "refreshToken", void 0);
    return ConnectionImportDataCredentials;
}(SpeakeasyBase));
export { ConnectionImportDataCredentials };
var ConnectionImportData = /** @class */ (function (_super) {
    __extends(ConnectionImportData, _super);
    function ConnectionImportData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=credentials" }),
        __metadata("design:type", ConnectionImportDataCredentials)
    ], ConnectionImportData.prototype, "credentials", void 0);
    __decorate([
        Metadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], ConnectionImportData.prototype, "metadata", void 0);
    __decorate([
        Metadata({ data: "json, name=settings" }),
        __metadata("design:type", Map)
    ], ConnectionImportData.prototype, "settings", void 0);
    return ConnectionImportData;
}(SpeakeasyBase));
export { ConnectionImportData };
