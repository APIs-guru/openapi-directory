import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportEvaluatedExamplesOutputConfig } from "./exportevaluatedexamplesoutputconfig";


// ExportEvaluatedExamplesRequest
/** 
 * Request message for AutoMl.ExportEvaluatedExamples.
**/
export class ExportEvaluatedExamplesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: ExportEvaluatedExamplesOutputConfig;
}
