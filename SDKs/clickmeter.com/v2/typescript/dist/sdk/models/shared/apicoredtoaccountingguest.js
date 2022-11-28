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
import { ApiCoreDtoAccountingConversionOptions } from "./apicoredtoaccountingconversionoptions";
import { ApiCoreDtoGrantsGrant } from "./apicoredtograntsgrant";
import { ApiCoreDtoAccountingExtendedGrants } from "./apicoredtoaccountingextendedgrants";
import { ApiCoreDtoAccountingHitOptions } from "./apicoredtoaccountinghitoptions";
export var ApiCoreDtoAccountingGuestTimeFormatEnum;
(function (ApiCoreDtoAccountingGuestTimeFormatEnum) {
    ApiCoreDtoAccountingGuestTimeFormatEnum["AmPm"] = "AmPm";
    ApiCoreDtoAccountingGuestTimeFormatEnum["H24"] = "H24";
})(ApiCoreDtoAccountingGuestTimeFormatEnum || (ApiCoreDtoAccountingGuestTimeFormatEnum = {}));
var ApiCoreDtoAccountingGuest = /** @class */ (function (_super) {
    __extends(ApiCoreDtoAccountingGuest, _super);
    function ApiCoreDtoAccountingGuest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKey, form, name=apiKey;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionOptions, form, name=conversionOptions;" }),
        __metadata("design:type", ApiCoreDtoAccountingConversionOptions)
    ], ApiCoreDtoAccountingGuest.prototype, "conversionOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate, form, name=creationDate;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentGrant, form, name=currentGrant;" }),
        __metadata("design:type", ApiCoreDtoGrantsGrant)
    ], ApiCoreDtoAccountingGuest.prototype, "currentGrant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateFormat, form, name=dateFormat;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "dateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decimalSeparator, form, name=decimalSeparator;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "decimalSeparator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email, form, name=email;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extendedGrants, form, name=extendedGrants;" }),
        __metadata("design:type", ApiCoreDtoAccountingExtendedGrants)
    ], ApiCoreDtoAccountingGuest.prototype, "extendedGrants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupGrants, form, name=groupGrants;" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoAccountingGuest.prototype, "groupGrants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hitOptions, form, name=hitOptions;" }),
        __metadata("design:type", ApiCoreDtoAccountingHitOptions)
    ], ApiCoreDtoAccountingGuest.prototype, "hitOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id, form, name=id;" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoAccountingGuest.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key, form, name=key;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language, form, name=language;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loginCount, form, name=loginCount;" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoAccountingGuest.prototype, "loginCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name, form, name=name;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes, form, name=notes;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberGroupSeparator, form, name=numberGroupSeparator;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "numberGroupSeparator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password, form, name=password;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeFormat, form, name=timeFormat;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "timeFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone, form, name=timeZone;" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoAccountingGuest.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeframeMinDate, form, name=timeframeMinDate;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "timeframeMinDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezonename, form, name=timezonename;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "timezonename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tlGrants, form, name=tlGrants;" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoAccountingGuest.prototype, "tlGrants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tpGrants, form, name=tpGrants;" }),
        __metadata("design:type", Number)
    ], ApiCoreDtoAccountingGuest.prototype, "tpGrants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName, form, name=userName;" }),
        __metadata("design:type", String)
    ], ApiCoreDtoAccountingGuest.prototype, "userName", void 0);
    return ApiCoreDtoAccountingGuest;
}(SpeakeasyBase));
export { ApiCoreDtoAccountingGuest };
