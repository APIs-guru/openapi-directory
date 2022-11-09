import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn: string;

  @Metadata({ data: "json, name=AutoMLJobArtifacts" })
  autoMlJobArtifacts?: AutoMlJobArtifacts;

  @Metadata({ data: "json, name=AutoMLJobConfig" })
  autoMlJobConfig?: AutoMlJobConfig;

  @Metadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;

  @Metadata({ data: "json, name=AutoMLJobObjective" })
  autoMlJobObjective?: AutoMlJobObjective;

  @Metadata({ data: "json, name=AutoMLJobSecondaryStatus" })
  autoMlJobSecondaryStatus: AutoMlJobSecondaryStatusEnum;

  @Metadata({ data: "json, name=AutoMLJobStatus" })
  autoMlJobStatus: AutoMlJobStatusEnum;

  @Metadata({ data: "json, name=BestCandidate" })
  bestCandidate?: AutoMlCandidate;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=GenerateCandidateDefinitionsOnly" })
  generateCandidateDefinitionsOnly?: boolean;

  @Metadata({ data: "json, name=InputDataConfig", elemType: shared.AutoMlChannel })
  inputDataConfig: AutoMlChannel[];

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=ModelDeployConfig" })
  modelDeployConfig?: ModelDeployConfig;

  @Metadata({ data: "json, name=ModelDeployResult" })
  modelDeployResult?: ModelDeployResult;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: AutoMlOutputDataConfig;

  @Metadata({ data: "json, name=PartialFailureReasons", elemType: shared.AutoMlPartialFailureReason })
  partialFailureReasons?: AutoMlPartialFailureReason[];

  @Metadata({ data: "json, name=ProblemType" })
  problemType?: ProblemTypeEnum;

  @Metadata({ data: "json, name=ResolvedAttributes" })
  resolvedAttributes?: ResolvedAttributes;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
