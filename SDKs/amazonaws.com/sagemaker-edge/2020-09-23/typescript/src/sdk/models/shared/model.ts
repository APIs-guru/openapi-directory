import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgeMetric } from "./edgemetric";



// Model
/** 
 * Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.
**/
export class Model extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LatestInference" })
  latestInference?: Date;

  @SpeakeasyMetadata({ data: "json, name=LatestSampleTime" })
  latestSampleTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelMetrics", elemType: EdgeMetric })
  modelMetrics?: EdgeMetric[];

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;
}
