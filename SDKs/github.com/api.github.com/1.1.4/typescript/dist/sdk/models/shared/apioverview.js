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
var ApiOverviewSshKeyFingerprints = /** @class */ (function (_super) {
    __extends(ApiOverviewSshKeyFingerprints, _super);
    function ApiOverviewSshKeyFingerprints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SHA256_DSA" }),
        __metadata("design:type", String)
    ], ApiOverviewSshKeyFingerprints.prototype, "sha256Dsa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SHA256_RSA" }),
        __metadata("design:type", String)
    ], ApiOverviewSshKeyFingerprints.prototype, "sha256Rsa", void 0);
    return ApiOverviewSshKeyFingerprints;
}(SpeakeasyBase));
export { ApiOverviewSshKeyFingerprints };
// ApiOverview
/**
 * Api Overview
**/
var ApiOverview = /** @class */ (function (_super) {
    __extends(ApiOverview, _super);
    function ApiOverview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions" }),
        __metadata("design:type", Array)
    ], ApiOverview.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", Array)
    ], ApiOverview.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git" }),
        __metadata("design:type", Array)
    ], ApiOverview.prototype, "git", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooks" }),
        __metadata("design:type", Array)
    ], ApiOverview.prototype, "hooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importer" }),
        __metadata("design:type", Array)
    ], ApiOverview.prototype, "importer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Array)
    ], ApiOverview.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_key_fingerprints" }),
        __metadata("design:type", ApiOverviewSshKeyFingerprints)
    ], ApiOverview.prototype, "sshKeyFingerprints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verifiable_password_authentication" }),
        __metadata("design:type", Boolean)
    ], ApiOverview.prototype, "verifiablePasswordAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=web" }),
        __metadata("design:type", Array)
    ], ApiOverview.prototype, "web", void 0);
    return ApiOverview;
}(SpeakeasyBase));
export { ApiOverview };
