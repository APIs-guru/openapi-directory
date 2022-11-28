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
import { AthenaDatasetDefinition } from "./athenadatasetdefinition";
import { DataDistributionTypeEnum } from "./datadistributiontypeenum";
import { InputModeEnum } from "./inputmodeenum";
import { RedshiftDatasetDefinition } from "./redshiftdatasetdefinition";
// DatasetDefinition
/**
 * Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either <code>AthenaDatasetDefinition</code> or <code>RedshiftDatasetDefinition</code> types.
**/
var DatasetDefinition = /** @class */ (function (_super) {
    __extends(DatasetDefinition, _super);
    function DatasetDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AthenaDatasetDefinition" }),
        __metadata("design:type", AthenaDatasetDefinition)
    ], DatasetDefinition.prototype, "athenaDatasetDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataDistributionType" }),
        __metadata("design:type", String)
    ], DatasetDefinition.prototype, "dataDistributionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputMode" }),
        __metadata("design:type", String)
    ], DatasetDefinition.prototype, "inputMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalPath" }),
        __metadata("design:type", String)
    ], DatasetDefinition.prototype, "localPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RedshiftDatasetDefinition" }),
        __metadata("design:type", RedshiftDatasetDefinition)
    ], DatasetDefinition.prototype, "redshiftDatasetDefinition", void 0);
    return DatasetDefinition;
}(SpeakeasyBase));
export { DatasetDefinition };
