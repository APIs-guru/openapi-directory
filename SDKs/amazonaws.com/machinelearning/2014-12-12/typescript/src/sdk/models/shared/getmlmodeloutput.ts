import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";
import { MlModelTypeEnum } from "./mlmodeltypeenum";
import { EntityStatusEnum } from "./entitystatusenum";


// GetMlModelOutput
/** 
 * Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.
**/
export class GetMlModelOutput extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=LogUri" })
  logUri?: string;

  @Metadata({ data: "json, name=MLModelId" })
  mlModelId?: string;

  @Metadata({ data: "json, name=MLModelType" })
  mlModelType?: MlModelTypeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Recipe" })
  recipe?: string;

  @Metadata({ data: "json, name=Schema" })
  schema?: string;

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
