import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportEvaluatedExamplesOutputConfig } from "./exportevaluatedexamplesoutputconfig";



// ExportEvaluatedExamplesRequest
/** 
 * Request message for AutoMl.ExportEvaluatedExamples.
**/
export class ExportEvaluatedExamplesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: ExportEvaluatedExamplesOutputConfig;
}
