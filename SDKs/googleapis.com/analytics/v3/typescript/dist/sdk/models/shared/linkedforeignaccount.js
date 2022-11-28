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
// LinkedForeignAccountInput
/**
 * JSON template for an Analytics Remarketing Audience Foreign Link.
**/
var LinkedForeignAccountInput = /** @class */ (function (_super) {
    __extends(LinkedForeignAccountInput, _super);
    function LinkedForeignAccountInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], LinkedForeignAccountInput.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LinkedForeignAccountInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], LinkedForeignAccountInput.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedAccountId" }),
        __metadata("design:type", String)
    ], LinkedForeignAccountInput.prototype, "linkedAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remarketingAudienceId" }),
        __metadata("design:type", String)
    ], LinkedForeignAccountInput.prototype, "remarketingAudienceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], LinkedForeignAccountInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LinkedForeignAccountInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], LinkedForeignAccountInput.prototype, "webPropertyId", void 0);
    return LinkedForeignAccountInput;
}(SpeakeasyBase));
export { LinkedForeignAccountInput };
// LinkedForeignAccount
/**
 * JSON template for an Analytics Remarketing Audience Foreign Link.
**/
var LinkedForeignAccount = /** @class */ (function (_super) {
    __extends(LinkedForeignAccount, _super);
    function LinkedForeignAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], LinkedForeignAccount.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eligibleForSearch" }),
        __metadata("design:type", Boolean)
    ], LinkedForeignAccount.prototype, "eligibleForSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LinkedForeignAccount.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" }),
        __metadata("design:type", String)
    ], LinkedForeignAccount.prototype, "internalWebPropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], LinkedForeignAccount.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedAccountId" }),
        __metadata("design:type", String)
    ], LinkedForeignAccount.prototype, "linkedAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remarketingAudienceId" }),
        __metadata("design:type", String)
    ], LinkedForeignAccount.prototype, "remarketingAudienceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], LinkedForeignAccount.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LinkedForeignAccount.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], LinkedForeignAccount.prototype, "webPropertyId", void 0);
    return LinkedForeignAccount;
}(SpeakeasyBase));
export { LinkedForeignAccount };
