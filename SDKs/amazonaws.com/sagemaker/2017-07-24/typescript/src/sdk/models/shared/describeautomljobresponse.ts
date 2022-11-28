import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlJobArtifacts } from "./automljobartifacts";
import { AutoMlJobConfig } from "./automljobconfig";
import { AutoMlJobObjective } from "./automljobobjective";
import { AutoMlJobSecondaryStatusEnum } from "./automljobsecondarystatusenum";
import { AutoMlJobStatusEnum } from "./automljobstatusenum";
import { AutoMlCandidate } from "./automlcandidate";
import { AutoMlChannel } from "./automlchannel";
import { ModelDeployConfig } from "./modeldeployconfig";
import { ModelDeployResult } from "./modeldeployresult";
import { AutoMlOutputDataConfig } from "./automloutputdataconfig";
import { AutoMlPartialFailureReason } from "./automlpartialfailurereason";
import { ProblemTypeEnum } from "./problemtypeenum";
import { ResolvedAttributes } from "./resolvedattributes";



export class DescribeAutoMlJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobArtifacts" })
  autoMlJobArtifacts?: AutoMlJobArtifacts;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobConfig" })
  autoMlJobConfig?: AutoMlJobConfig;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobObjective" })
  autoMlJobObjective?: AutoMlJobObjective;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobSecondaryStatus" })
  autoMlJobSecondaryStatus: AutoMlJobSecondaryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobStatus" })
  autoMlJobStatus: AutoMlJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=BestCandidate" })
  bestCandidate?: AutoMlCandidate;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=GenerateCandidateDefinitionsOnly" })
  generateCandidateDefinitionsOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig", elemType: AutoMlChannel })
  inputDataConfig: AutoMlChannel[];

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelDeployConfig" })
  modelDeployConfig?: ModelDeployConfig;

  @SpeakeasyMetadata({ data: "json, name=ModelDeployResult" })
  modelDeployResult?: ModelDeployResult;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: AutoMlOutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=PartialFailureReasons", elemType: AutoMlPartialFailureReason })
  partialFailureReasons?: AutoMlPartialFailureReason[];

  @SpeakeasyMetadata({ data: "json, name=ProblemType" })
  problemType?: ProblemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ResolvedAttributes" })
  resolvedAttributes?: ResolvedAttributes;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
