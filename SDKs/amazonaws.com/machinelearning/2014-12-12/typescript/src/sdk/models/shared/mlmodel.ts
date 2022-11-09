import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlgorithmEnum } from "./algorithmenum";
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";
import { MlModelTypeEnum } from "./mlmodeltypeenum";
import { EntityStatusEnum } from "./entitystatusenum";


// MlModel
/** 
 * <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>
**/
export class MlModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Algorithm" })
  algorithm?: AlgorithmEnum;

  @Metadata({ data: "json, name=ComputeTime" })
  computeTime?: number;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=CreatedByIamUser" })
  createdByIamUser?: string;

  @Metadata({ data: "json, name=EndpointInfo" })
  endpointInfo?: RealtimeEndpointInfo;

  @Metadata({ data: "json, name=FinishedAt" })
  finishedAt?: Date;

  @Metadata({ data: "json, name=InputDataLocationS3" })
  inputDataLocationS3?: string;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=MLModelId" })
  mlModelId?: string;

  @Metadata({ data: "json, name=MLModelType" })
  mlModelType?: MlModelTypeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ScoreThreshold" })
  scoreThreshold?: number;

  @Metadata({ data: "json, name=ScoreThresholdLastUpdatedAt" })
  scoreThresholdLastUpdatedAt?: Date;

  @Metadata({ data: "json, name=SizeInBytes" })
  sizeInBytes?: number;

  @Metadata({ data: "json, name=StartedAt" })
  startedAt?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: EntityStatusEnum;

  @Metadata({ data: "json, name=TrainingDataSourceId" })
  trainingDataSourceId?: string;

  @Metadata({ data: "json, name=TrainingParameters" })
  trainingParameters?: Map<string, string>;
}
