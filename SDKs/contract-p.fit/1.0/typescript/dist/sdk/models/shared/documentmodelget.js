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
import { StateModelGet } from "./statemodelget";
import { StatusDataModel } from "./statusdatamodel";
import { TimingsModelGet } from "./timingsmodelget";
var DocumentModelGet = /** @class */ (function (_super) {
    __extends(DocumentModelGet, _super);
    function DocumentModelGet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=escalate" }),
        __metadata("design:type", StateModelGet)
    ], DocumentModelGet.prototype, "escalate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedback" }),
        __metadata("design:type", Map)
    ], DocumentModelGet.prototype, "feedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files" }),
        __metadata("design:type", Map)
    ], DocumentModelGet.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flag_for_review" }),
        __metadata("design:type", Boolean)
    ], DocumentModelGet.prototype, "flagForReview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DocumentModelGet.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbox" }),
        __metadata("design:type", String)
    ], DocumentModelGet.prototype, "inbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_version" }),
        __metadata("design:type", String)
    ], DocumentModelGet.prototype, "lastVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lock" }),
        __metadata("design:type", StateModelGet)
    ], DocumentModelGet.prototype, "lock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta_information" }),
        __metadata("design:type", Map)
    ], DocumentModelGet.prototype, "metaInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_filename" }),
        __metadata("design:type", String)
    ], DocumentModelGet.prototype, "originalFilename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DocumentModelGet.prototype, "pageCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prediction" }),
        __metadata("design:type", Map)
    ], DocumentModelGet.prototype, "prediction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reject" }),
        __metadata("design:type", StateModelGet)
    ], DocumentModelGet.prototype, "reject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_data" }),
        __metadata("design:type", StatusDataModel)
    ], DocumentModelGet.prototype, "statusData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submitted" }),
        __metadata("design:type", StateModelGet)
    ], DocumentModelGet.prototype, "submitted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timings" }),
        __metadata("design:type", TimingsModelGet)
    ], DocumentModelGet.prototype, "timings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage_data" }),
        __metadata("design:type", Map)
    ], DocumentModelGet.prototype, "usageData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versions" }),
        __metadata("design:type", Array)
    ], DocumentModelGet.prototype, "versions", void 0);
    return DocumentModelGet;
}(SpeakeasyBase));
export { DocumentModelGet };
