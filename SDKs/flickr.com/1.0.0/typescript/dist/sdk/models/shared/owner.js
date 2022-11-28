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
var Owner = /** @class */ (function (_super) {
    __extends(Owner, _super);
    function Owner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconfarm" }),
        __metadata("design:type", String)
    ], Owner.prototype, "iconfarm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconserver" }),
        __metadata("design:type", String)
    ], Owner.prototype, "iconserver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_ad_free" }),
        __metadata("design:type", Boolean)
    ], Owner.prototype, "isAdFree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ispro" }),
        __metadata("design:type", Boolean)
    ], Owner.prototype, "ispro", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Owner.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noindexfollow" }),
        __metadata("design:type", Boolean)
    ], Owner.prototype, "noindexfollow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsid" }),
        __metadata("design:type", String)
    ], Owner.prototype, "nsid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path_alias" }),
        __metadata("design:type", String)
    ], Owner.prototype, "pathAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realname" }),
        __metadata("design:type", String)
    ], Owner.prototype, "realname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], Owner.prototype, "username", void 0);
    return Owner;
}(SpeakeasyBase));
export { Owner };
