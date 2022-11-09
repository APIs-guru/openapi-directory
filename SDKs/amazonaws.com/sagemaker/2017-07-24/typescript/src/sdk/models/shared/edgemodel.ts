import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EdgeModel
/** 
 * The model on the edge device.
**/
export class EdgeModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=LatestInference" })
  latestInference?: Date;

  @Metadata({ data: "json, name=LatestSampleTime" })
  latestSampleTime?: Date;

  @Metadata({ data: "json, name=ModelName" })
  modelName: string;

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion: string;
}
