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
import { BigQueryDestination } from "./bigquerydestination";
import { GcsDestination } from "./gcsdestination";
// OutputConfig
/**
 * * For Translation: CSV file `translation.csv`, with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .TSV file which describes examples that have given ML_USE, using the following row format per line: TEXT_SNIPPET (in source language) \t TEXT_SNIPPET (in target language) * For Tables: Output depends on whether the dataset was imported from GCS or BigQuery. GCS case: gcs_destination must be set. Exported are CSV file(s) `tables_1.csv`, `tables_2.csv`,...,`tables_N.csv` with each having as header line the table's column names, and all other lines contain values for the header columns. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_data__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In that dataset a new table called `primary_table` will be created, and filled with precisely the same data as this obtained on import.
**/
var OutputConfig = /** @class */ (function (_super) {
    __extends(OutputConfig, _super);
    function OutputConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryDestination" }),
        __metadata("design:type", BigQueryDestination)
    ], OutputConfig.prototype, "bigqueryDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsDestination" }),
        __metadata("design:type", GcsDestination)
    ], OutputConfig.prototype, "gcsDestination", void 0);
    return OutputConfig;
}(SpeakeasyBase));
export { OutputConfig };
