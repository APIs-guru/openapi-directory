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
// ExportEvaluatedExamplesOutputConfig
/**
 * Output configuration for ExportEvaluatedExamples Action. Note that this call is available only for 30 days since the moment the model was evaluated. The output depends on the domain, as follows (note that only examples from the TEST set are exported): * For Tables: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_evaluated_examples__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset an `evaluated_examples` table will be created. It will have all the same columns as the primary_table of the dataset from which the model was created, as they were at the moment of model's evaluation (this includes the target column with its ground truth), followed by a column called "predicted_". That last column will contain the model's prediction result for each respective row, given as ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation.
**/
var ExportEvaluatedExamplesOutputConfig = /** @class */ (function (_super) {
    __extends(ExportEvaluatedExamplesOutputConfig, _super);
    function ExportEvaluatedExamplesOutputConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryDestination" }),
        __metadata("design:type", BigQueryDestination)
    ], ExportEvaluatedExamplesOutputConfig.prototype, "bigqueryDestination", void 0);
    return ExportEvaluatedExamplesOutputConfig;
}(SpeakeasyBase));
export { ExportEvaluatedExamplesOutputConfig };
