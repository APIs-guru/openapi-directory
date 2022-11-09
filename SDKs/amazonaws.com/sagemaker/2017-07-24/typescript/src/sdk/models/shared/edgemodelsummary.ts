import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EdgeModelSummary
/** 
 * Summary of model on edge device.
**/
export class EdgeModelSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelName" })
  modelName: string;

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion: string;
}
