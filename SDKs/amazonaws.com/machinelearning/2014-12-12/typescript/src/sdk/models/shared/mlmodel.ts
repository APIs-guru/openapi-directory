import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmEnum } from "./algorithmenum";
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";
import { MlModelTypeEnum } from "./mlmodeltypeenum";
import { EntityStatusEnum } from "./entitystatusenum";



// MlModel
/** 
 * <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>
**/
export class MlModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Algorithm" })
  algorithm?: AlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=ComputeTime" })
  computeTime?: number;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedByIamUser" })
  createdByIamUser?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointInfo" })
  endpointInfo?: RealtimeEndpointInfo;

  @SpeakeasyMetadata({ data: "json, name=FinishedAt" })
  finishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputDataLocationS3" })
  inputDataLocationS3?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId?: string;

  @SpeakeasyMetadata({ data: "json, name=MLModelType" })
  mlModelType?: MlModelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ScoreThreshold" })
  scoreThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=ScoreThresholdLastUpdatedAt" })
  scoreThresholdLastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=SizeInBytes" })
  sizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=StartedAt" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TrainingDataSourceId" })
  trainingDataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingParameters" })
  trainingParameters?: Map<string, string>;
}
