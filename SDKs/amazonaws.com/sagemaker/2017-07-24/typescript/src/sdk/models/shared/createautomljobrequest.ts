import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlJobConfig } from "./automljobconfig";
import { AutoMlJobObjective } from "./automljobobjective";
import { AutoMlChannel } from "./automlchannel";
import { ModelDeployConfig } from "./modeldeployconfig";
import { AutoMlOutputDataConfig } from "./automloutputdataconfig";
import { ProblemTypeEnum } from "./problemtypeenum";
import { Tag } from "./tag";



export class CreateAutoMlJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoMLJobConfig" })
  autoMlJobConfig?: AutoMlJobConfig;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobObjective" })
  autoMlJobObjective?: AutoMlJobObjective;

  @SpeakeasyMetadata({ data: "json, name=GenerateCandidateDefinitionsOnly" })
  generateCandidateDefinitionsOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig", elemType: AutoMlChannel })
  inputDataConfig: AutoMlChannel[];

  @SpeakeasyMetadata({ data: "json, name=ModelDeployConfig" })
  modelDeployConfig?: ModelDeployConfig;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: AutoMlOutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=ProblemType" })
  problemType?: ProblemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
