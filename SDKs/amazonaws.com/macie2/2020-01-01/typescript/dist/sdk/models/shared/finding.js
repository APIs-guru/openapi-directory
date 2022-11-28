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
import { FindingCategoryEnum } from "./findingcategoryenum";
import { ClassificationDetails } from "./classificationdetails";
import { PolicyDetails } from "./policydetails";
import { ResourcesAffected } from "./resourcesaffected";
import { Severity } from "./severity";
import { FindingTypeEnum } from "./findingtypeenum";
// Finding
/**
 * Provides the details of a finding.
**/
var Finding = /** @class */ (function (_super) {
    __extends(Finding, _super);
    function Finding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Finding.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], Finding.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], Finding.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classificationDetails" }),
        __metadata("design:type", ClassificationDetails)
    ], Finding.prototype, "classificationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], Finding.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Finding.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Finding.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Finding.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partition" }),
        __metadata("design:type", String)
    ], Finding.prototype, "partition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyDetails" }),
        __metadata("design:type", PolicyDetails)
    ], Finding.prototype, "policyDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], Finding.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourcesAffected" }),
        __metadata("design:type", ResourcesAffected)
    ], Finding.prototype, "resourcesAffected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sample" }),
        __metadata("design:type", Boolean)
    ], Finding.prototype, "sample", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaVersion" }),
        __metadata("design:type", String)
    ], Finding.prototype, "schemaVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", Severity)
    ], Finding.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Finding.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Finding.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], Finding.prototype, "updatedAt", void 0);
    return Finding;
}(SpeakeasyBase));
export { Finding };
