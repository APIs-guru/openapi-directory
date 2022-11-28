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
import { Api2ModelsCounts } from "./api2modelscounts";
var Api2ModelsProfile = /** @class */ (function (_super) {
    __extends(Api2ModelsProfile, _super);
    function Api2ModelsProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AboutMe, form, name=AboutMe;" }),
        __metadata("design:type", String)
    ], Api2ModelsProfile.prototype, "aboutMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackgroundUrl, form, name=BackgroundUrl;" }),
        __metadata("design:type", String)
    ], Api2ModelsProfile.prototype, "backgroundUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Counts, form, name=Counts;" }),
        __metadata("design:type", Api2ModelsCounts)
    ], Api2ModelsProfile.prototype, "counts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName, form, name=FirstName;" }),
        __metadata("design:type", String)
    ], Api2ModelsProfile.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullName, form, name=FullName;" }),
        __metadata("design:type", String)
    ], Api2ModelsProfile.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HomeUrl, form, name=HomeUrl;" }),
        __metadata("design:type", String)
    ], Api2ModelsProfile.prototype, "homeUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName, form, name=LastName;" }),
        __metadata("design:type", String)
    ], Api2ModelsProfile.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhotoUrl, form, name=PhotoUrl;" }),
        __metadata("design:type", String)
    ], Api2ModelsProfile.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserID, form, name=UserID;" }),
        __metadata("design:type", Number)
    ], Api2ModelsProfile.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserName, form, name=UserName;" }),
        __metadata("design:type", String)
    ], Api2ModelsProfile.prototype, "userName", void 0);
    return Api2ModelsProfile;
}(SpeakeasyBase));
export { Api2ModelsProfile };
