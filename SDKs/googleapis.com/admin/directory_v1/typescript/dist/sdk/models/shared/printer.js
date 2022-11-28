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
import { AuxiliaryMessage } from "./auxiliarymessage";
// PrinterInput
/**
 * Printer configuration.
**/
var PrinterInput = /** @class */ (function (_super) {
    __extends(PrinterInput, _super);
    function PrinterInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PrinterInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PrinterInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PrinterInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=makeAndModel" }),
        __metadata("design:type", String)
    ], PrinterInput.prototype, "makeAndModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PrinterInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgUnitId" }),
        __metadata("design:type", String)
    ], PrinterInput.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PrinterInput.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useDriverlessConfig" }),
        __metadata("design:type", Boolean)
    ], PrinterInput.prototype, "useDriverlessConfig", void 0);
    return PrinterInput;
}(SpeakeasyBase));
export { PrinterInput };
// Printer
/**
 * Printer configuration.
**/
var Printer = /** @class */ (function (_super) {
    __extends(Printer, _super);
    function Printer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auxiliaryMessages", elemType: AuxiliaryMessage }),
        __metadata("design:type", Array)
    ], Printer.prototype, "auxiliaryMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Printer.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Printer.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Printer.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Printer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=makeAndModel" }),
        __metadata("design:type", String)
    ], Printer.prototype, "makeAndModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Printer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgUnitId" }),
        __metadata("design:type", String)
    ], Printer.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Printer.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useDriverlessConfig" }),
        __metadata("design:type", Boolean)
    ], Printer.prototype, "useDriverlessConfig", void 0);
    return Printer;
}(SpeakeasyBase));
export { Printer };
