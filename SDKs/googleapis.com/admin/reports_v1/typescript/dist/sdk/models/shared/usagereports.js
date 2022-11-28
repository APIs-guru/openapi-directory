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
import { UsageReport } from "./usagereport";
var UsageReportsWarningsData = /** @class */ (function (_super) {
    __extends(UsageReportsWarningsData, _super);
    function UsageReportsWarningsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], UsageReportsWarningsData.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UsageReportsWarningsData.prototype, "value", void 0);
    return UsageReportsWarningsData;
}(SpeakeasyBase));
export { UsageReportsWarningsData };
var UsageReportsWarnings = /** @class */ (function (_super) {
    __extends(UsageReportsWarnings, _super);
    function UsageReportsWarnings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UsageReportsWarnings.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: UsageReportsWarningsData }),
        __metadata("design:type", Array)
    ], UsageReportsWarnings.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UsageReportsWarnings.prototype, "message", void 0);
    return UsageReportsWarnings;
}(SpeakeasyBase));
export { UsageReportsWarnings };
var UsageReports = /** @class */ (function (_super) {
    __extends(UsageReports, _super);
    function UsageReports() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], UsageReports.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], UsageReports.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], UsageReports.prototype, "nextPageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageReports", elemType: UsageReport }),
        __metadata("design:type", Array)
    ], UsageReports.prototype, "usageReports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warnings", elemType: UsageReportsWarnings }),
        __metadata("design:type", Array)
    ], UsageReports.prototype, "warnings", void 0);
    return UsageReports;
}(SpeakeasyBase));
export { UsageReports };
