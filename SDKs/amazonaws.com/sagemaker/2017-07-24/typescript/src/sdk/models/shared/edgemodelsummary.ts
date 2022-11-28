import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EdgeModelSummary
/** 
 * Summary of model on edge device.
**/
export class EdgeModelSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion: string;
}
