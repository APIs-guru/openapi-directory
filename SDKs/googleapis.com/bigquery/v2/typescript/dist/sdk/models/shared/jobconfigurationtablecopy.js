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
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { TableReference } from "./tablereference";
var JobConfigurationTableCopy = /** @class */ (function (_super) {
    __extends(JobConfigurationTableCopy, _super);
    function JobConfigurationTableCopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDisposition" }),
        __metadata("design:type", String)
    ], JobConfigurationTableCopy.prototype, "createDisposition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationEncryptionConfiguration" }),
        __metadata("design:type", EncryptionConfiguration)
    ], JobConfigurationTableCopy.prototype, "destinationEncryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationExpirationTime" }),
        __metadata("design:type", Object)
    ], JobConfigurationTableCopy.prototype, "destinationExpirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationTable" }),
        __metadata("design:type", TableReference)
    ], JobConfigurationTableCopy.prototype, "destinationTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationType" }),
        __metadata("design:type", String)
    ], JobConfigurationTableCopy.prototype, "operationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceTable" }),
        __metadata("design:type", TableReference)
    ], JobConfigurationTableCopy.prototype, "sourceTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceTables", elemType: TableReference }),
        __metadata("design:type", Array)
    ], JobConfigurationTableCopy.prototype, "sourceTables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeDisposition" }),
        __metadata("design:type", String)
    ], JobConfigurationTableCopy.prototype, "writeDisposition", void 0);
    return JobConfigurationTableCopy;
}(SpeakeasyBase));
export { JobConfigurationTableCopy };
