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
var BalanceSheetAssetsCurrentAssetsAccounts = /** @class */ (function (_super) {
    __extends(BalanceSheetAssetsCurrentAssetsAccounts, _super);
    function BalanceSheetAssetsCurrentAssetsAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BalanceSheetAssetsCurrentAssetsAccounts.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BalanceSheetAssetsCurrentAssetsAccounts.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], BalanceSheetAssetsCurrentAssetsAccounts.prototype, "value", void 0);
    return BalanceSheetAssetsCurrentAssetsAccounts;
}(SpeakeasyBase));
export { BalanceSheetAssetsCurrentAssetsAccounts };
var BalanceSheetAssetsCurrentAssets = /** @class */ (function (_super) {
    __extends(BalanceSheetAssetsCurrentAssets, _super);
    function BalanceSheetAssetsCurrentAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts", elemType: BalanceSheetAssetsCurrentAssetsAccounts }),
        __metadata("design:type", Array)
    ], BalanceSheetAssetsCurrentAssets.prototype, "accounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BalanceSheetAssetsCurrentAssets.prototype, "total", void 0);
    return BalanceSheetAssetsCurrentAssets;
}(SpeakeasyBase));
export { BalanceSheetAssetsCurrentAssets };
var BalanceSheetAssetsFixedAssetsAccounts = /** @class */ (function (_super) {
    __extends(BalanceSheetAssetsFixedAssetsAccounts, _super);
    function BalanceSheetAssetsFixedAssetsAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BalanceSheetAssetsFixedAssetsAccounts.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BalanceSheetAssetsFixedAssetsAccounts.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], BalanceSheetAssetsFixedAssetsAccounts.prototype, "value", void 0);
    return BalanceSheetAssetsFixedAssetsAccounts;
}(SpeakeasyBase));
export { BalanceSheetAssetsFixedAssetsAccounts };
var BalanceSheetAssetsFixedAssets = /** @class */ (function (_super) {
    __extends(BalanceSheetAssetsFixedAssets, _super);
    function BalanceSheetAssetsFixedAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts", elemType: BalanceSheetAssetsFixedAssetsAccounts }),
        __metadata("design:type", Array)
    ], BalanceSheetAssetsFixedAssets.prototype, "accounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BalanceSheetAssetsFixedAssets.prototype, "total", void 0);
    return BalanceSheetAssetsFixedAssets;
}(SpeakeasyBase));
export { BalanceSheetAssetsFixedAssets };
var BalanceSheetAssets = /** @class */ (function (_super) {
    __extends(BalanceSheetAssets, _super);
    function BalanceSheetAssets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_assets" }),
        __metadata("design:type", BalanceSheetAssetsCurrentAssets)
    ], BalanceSheetAssets.prototype, "currentAssets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed_assets" }),
        __metadata("design:type", BalanceSheetAssetsFixedAssets)
    ], BalanceSheetAssets.prototype, "fixedAssets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BalanceSheetAssets.prototype, "total", void 0);
    return BalanceSheetAssets;
}(SpeakeasyBase));
export { BalanceSheetAssets };
var BalanceSheetEquityItems = /** @class */ (function (_super) {
    __extends(BalanceSheetEquityItems, _super);
    function BalanceSheetEquityItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BalanceSheetEquityItems.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BalanceSheetEquityItems.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], BalanceSheetEquityItems.prototype, "value", void 0);
    return BalanceSheetEquityItems;
}(SpeakeasyBase));
export { BalanceSheetEquityItems };
var BalanceSheetEquity = /** @class */ (function (_super) {
    __extends(BalanceSheetEquity, _super);
    function BalanceSheetEquity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: BalanceSheetEquityItems }),
        __metadata("design:type", Array)
    ], BalanceSheetEquity.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BalanceSheetEquity.prototype, "total", void 0);
    return BalanceSheetEquity;
}(SpeakeasyBase));
export { BalanceSheetEquity };
var BalanceSheetLiabilitiesAccounts = /** @class */ (function (_super) {
    __extends(BalanceSheetLiabilitiesAccounts, _super);
    function BalanceSheetLiabilitiesAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BalanceSheetLiabilitiesAccounts.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BalanceSheetLiabilitiesAccounts.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], BalanceSheetLiabilitiesAccounts.prototype, "value", void 0);
    return BalanceSheetLiabilitiesAccounts;
}(SpeakeasyBase));
export { BalanceSheetLiabilitiesAccounts };
var BalanceSheetLiabilities = /** @class */ (function (_super) {
    __extends(BalanceSheetLiabilities, _super);
    function BalanceSheetLiabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts", elemType: BalanceSheetLiabilitiesAccounts }),
        __metadata("design:type", Array)
    ], BalanceSheetLiabilities.prototype, "accounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BalanceSheetLiabilities.prototype, "total", void 0);
    return BalanceSheetLiabilities;
}(SpeakeasyBase));
export { BalanceSheetLiabilities };
var BalanceSheet = /** @class */ (function (_super) {
    __extends(BalanceSheet, _super);
    function BalanceSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", BalanceSheetAssets)
    ], BalanceSheet.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], BalanceSheet.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], BalanceSheet.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", String)
    ], BalanceSheet.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equity" }),
        __metadata("design:type", BalanceSheetEquity)
    ], BalanceSheet.prototype, "equity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BalanceSheet.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liabilities" }),
        __metadata("design:type", BalanceSheetLiabilities)
    ], BalanceSheet.prototype, "liabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_name" }),
        __metadata("design:type", String)
    ], BalanceSheet.prototype, "reportName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", String)
    ], BalanceSheet.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], BalanceSheet.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], BalanceSheet.prototype, "updatedBy", void 0);
    return BalanceSheet;
}(SpeakeasyBase));
export { BalanceSheet };
