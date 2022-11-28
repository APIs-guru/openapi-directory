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
import { Api2ModelsAccounting } from "./api2modelsaccounting";
import { Api2ModelsPersonal } from "./api2modelspersonal";
import { Api2ModelsPreference } from "./api2modelspreference";
import { Api2ModelsProfile } from "./api2modelsprofile";
// Api2ModelsBigOvenUser
/**
 * An API2 wrapper object for a user
**/
var Api2ModelsBigOvenUser = /** @class */ (function (_super) {
    __extends(Api2ModelsBigOvenUser, _super);
    function Api2ModelsBigOvenUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Accounting, form, name=Accounting;" }),
        __metadata("design:type", Api2ModelsAccounting)
    ], Api2ModelsBigOvenUser.prototype, "accounting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BOAuthToken, form, name=BOAuthToken;" }),
        __metadata("design:type", String)
    ], Api2ModelsBigOvenUser.prototype, "boAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastChangeLogID, form, name=LastChangeLogID;" }),
        __metadata("design:type", String)
    ], Api2ModelsBigOvenUser.prototype, "lastChangeLogId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Personal, form, name=Personal;" }),
        __metadata("design:type", Api2ModelsPersonal)
    ], Api2ModelsBigOvenUser.prototype, "personal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Preferences, form, name=Preferences;" }),
        __metadata("design:type", Api2ModelsPreference)
    ], Api2ModelsBigOvenUser.prototype, "preferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Profile, form, name=Profile;" }),
        __metadata("design:type", Api2ModelsProfile)
    ], Api2ModelsBigOvenUser.prototype, "profile", void 0);
    return Api2ModelsBigOvenUser;
}(SpeakeasyBase));
export { Api2ModelsBigOvenUser };
