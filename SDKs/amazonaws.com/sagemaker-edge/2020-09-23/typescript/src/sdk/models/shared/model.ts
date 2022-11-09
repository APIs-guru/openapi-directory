import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EdgeMetric } from "./edgemetric";


// Model
/** 
 * Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.
**/
export class Model extends SpeakeasyBase {
  @Metadata({ data: "json, name=LatestInference" })
  latestInference?: Date;

  @Metadata({ data: "json, name=LatestSampleTime" })
  latestSampleTime?: Date;

  @Metadata({ data: "json, name=ModelMetrics", elemType: shared.EdgeMetric })
  modelMetrics?: EdgeMetric[];

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;
}
