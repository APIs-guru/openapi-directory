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
import { SettingMetadata } from "./settingmetadata";
export var SenderFormatEnum;
(function (SenderFormatEnum) {
    SenderFormatEnum["Csv"] = "CSV";
})(SenderFormatEnum || (SenderFormatEnum = {}));
// Sender
/**
 * An sender of reports to the data hub
**/
var Sender = /** @class */ (function (_super) {
    __extends(Sender, _super);
    function Sender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Sender.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], Sender.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", SettingMetadata)
    ], Sender.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Sender.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizationName" }),
        __metadata("design:type", String)
    ], Sender.prototype, "organizationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], Sender.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], Sender.prototype, "topic", void 0);
    return Sender;
}(SpeakeasyBase));
export { Sender };
// SenderInput
/**
 * An sender of reports to the data hub
**/
var SenderInput = /** @class */ (function (_super) {
    __extends(SenderInput, _super);
    function SenderInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SenderInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SenderInput.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SenderInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], SenderInput.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], SenderInput.prototype, "topic", void 0);
    return SenderInput;
}(SpeakeasyBase));
export { SenderInput };
