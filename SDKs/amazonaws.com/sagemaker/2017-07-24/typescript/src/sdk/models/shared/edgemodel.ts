import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EdgeModel
/** 
 * The model on the edge device.
**/
export class EdgeModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LatestInference" })
  latestInference?: Date;

  @SpeakeasyMetadata({ data: "json, name=LatestSampleTime" })
  latestSampleTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion: string;
}
