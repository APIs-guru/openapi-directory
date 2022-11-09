import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoMlJobConfig } from "./automljobconfig";
import { AutoMlJobObjective } from "./automljobobjective";
import { AutoMlChannel } from "./automlchannel";
import { ModelDeployConfig } from "./modeldeployconfig";
import { AutoMlOutputDataConfig } from "./automloutputdataconfig";
import { ProblemTypeEnum } from "./problemtypeenum";
import { Tag } from "./tag";


export class CreateAutoMlJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoMLJobConfig" })
  autoMlJobConfig?: AutoMlJobConfig;

  @Metadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;

  @Metadata({ data: "json, name=AutoMLJobObjective" })
  autoMlJobObjective?: AutoMlJobObjective;

  @Metadata({ data: "json, name=GenerateCandidateDefinitionsOnly" })
  generateCandidateDefinitionsOnly?: boolean;

  @Metadata({ data: "json, name=InputDataConfig", elemType: shared.AutoMlChannel })
  inputDataConfig: AutoMlChannel[];

  @Metadata({ data: "json, name=ModelDeployConfig" })
  modelDeployConfig?: ModelDeployConfig;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: AutoMlOutputDataConfig;

  @Metadata({ data: "json, name=ProblemType" })
  problemType?: ProblemTypeEnum;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
