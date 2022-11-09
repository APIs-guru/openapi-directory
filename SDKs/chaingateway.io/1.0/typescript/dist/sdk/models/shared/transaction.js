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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "json, name=block_number" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "blockNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=contract_address" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "contractAddress", void 0);
    __decorate([
        Metadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "json, name=gas" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "gas", void 0);
    __decorate([
        Metadata({ data: "json, name=gas_price" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "gasPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "to", void 0);
    __decorate([
        Metadata({ data: "json, name=token_decimals" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "tokenDecimals", void 0);
    __decorate([
        Metadata({ data: "json, name=token_name" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "tokenName", void 0);
    __decorate([
        Metadata({ data: "json, name=token_supply" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "tokenSupply", void 0);
    __decorate([
        Metadata({ data: "json, name=token_symbol" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "tokenSymbol", void 0);
    __decorate([
        Metadata({ data: "json, name=txid" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "txid", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "type", void 0);
    return Transaction;
}(SpeakeasyBase));
export { Transaction };
