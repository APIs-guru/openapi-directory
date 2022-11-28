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
import { BaseModelNameEnum } from "./basemodelnameenum";
import { InputDataConfig } from "./inputdataconfig";
import { ClmLanguageCodeEnum } from "./clmlanguagecodeenum";
import { ModelStatusEnum } from "./modelstatusenum";
// LanguageModel
/**
 * The structure used to describe a custom language model.
**/
var LanguageModel = /** @class */ (function (_super) {
    __extends(LanguageModel, _super);
    function LanguageModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BaseModelName" }),
        __metadata("design:type", String)
    ], LanguageModel.prototype, "baseModelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateTime" }),
        __metadata("design:type", Date)
    ], LanguageModel.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], LanguageModel.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputDataConfig" }),
        __metadata("design:type", InputDataConfig)
    ], LanguageModel.prototype, "inputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], LanguageModel.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], LanguageModel.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelName" }),
        __metadata("design:type", String)
    ], LanguageModel.prototype, "modelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelStatus" }),
        __metadata("design:type", String)
    ], LanguageModel.prototype, "modelStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpgradeAvailability" }),
        __metadata("design:type", Boolean)
    ], LanguageModel.prototype, "upgradeAvailability", void 0);
    return LanguageModel;
}(SpeakeasyBase));
export { LanguageModel };
