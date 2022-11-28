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
export var OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum;
(function (OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum) {
    OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum["Eur"] = "EUR";
    OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum["Gbp"] = "GBP";
})(OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum || (OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrencyCodeEnum = {}));
var OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency = /** @class */ (function (_super) {
    __extends(OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency, _super);
    function OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency.prototype, "description", void 0);
    return OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency;
}(SpeakeasyBase));
export { OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency };
export var OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum;
(function (OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum) {
    OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum["Live"] = "LIVE";
    OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum["Migrated"] = "MIGRATED";
})(OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum || (OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsStatusEnum = {}));
var OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems = /** @class */ (function (_super) {
    __extends(OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems, _super);
    function OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cbic" }),
        __metadata("design:type", String)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "cbic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ccan" }),
        __metadata("design:type", String)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "ccan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ciban" }),
        __metadata("design:type", String)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "ciban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cnsc" }),
        __metadata("design:type", String)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "cnsc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colour" }),
        __metadata("design:type", String)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "colour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsCurrency)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultAccount" }),
        __metadata("design:type", Boolean)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "defaultAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directDebitsAllowed" }),
        __metadata("design:type", Boolean)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "directDebitsAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ican" }),
        __metadata("design:type", Number)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "ican", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems.prototype, "status", void 0);
    return OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems;
}(SpeakeasyBase));
export { OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems };
