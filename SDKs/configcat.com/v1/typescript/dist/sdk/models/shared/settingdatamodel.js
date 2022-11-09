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
import { SettingTypeEnum } from "./settingtypeenum";
var SettingDataModel = /** @class */ (function (_super) {
    __extends(SettingDataModel, _super);
    function SettingDataModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], SettingDataModel.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=creatorEmail" }),
        __metadata("design:type", String)
    ], SettingDataModel.prototype, "creatorEmail", void 0);
    __decorate([
        Metadata({ data: "json, name=creatorFullName" }),
        __metadata("design:type", String)
    ], SettingDataModel.prototype, "creatorFullName", void 0);
    __decorate([
        Metadata({ data: "json, name=expirationWarningAt" }),
        __metadata("design:type", Date)
    ], SettingDataModel.prototype, "expirationWarningAt", void 0);
    __decorate([
        Metadata({ data: "json, name=hint" }),
        __metadata("design:type", String)
    ], SettingDataModel.prototype, "hint", void 0);
    __decorate([
        Metadata({ data: "json, name=isWatching" }),
        __metadata("design:type", Boolean)
    ], SettingDataModel.prototype, "isWatching", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], SettingDataModel.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SettingDataModel.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=ownerEmail" }),
        __metadata("design:type", String)
    ], SettingDataModel.prototype, "ownerEmail", void 0);
    __decorate([
        Metadata({ data: "json, name=ownerFullName" }),
        __metadata("design:type", String)
    ], SettingDataModel.prototype, "ownerFullName", void 0);
    __decorate([
        Metadata({ data: "json, name=settingId" }),
        __metadata("design:type", Number)
    ], SettingDataModel.prototype, "settingId", void 0);
    __decorate([
        Metadata({ data: "json, name=settingType" }),
        __metadata("design:type", String)
    ], SettingDataModel.prototype, "settingType", void 0);
    return SettingDataModel;
}(SpeakeasyBase));
export { SettingDataModel };
