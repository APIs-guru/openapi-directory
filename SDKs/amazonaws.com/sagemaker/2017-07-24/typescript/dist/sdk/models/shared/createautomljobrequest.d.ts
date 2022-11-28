import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlJobConfig } from "./automljobconfig";
import { AutoMlJobObjective } from "./automljobobjective";
import { AutoMlChannel } from "./automlchannel";
import { ModelDeployConfig } from "./modeldeployconfig";
import { AutoMlOutputDataConfig } from "./automloutputdataconfig";
import { ProblemTypeEnum } from "./problemtypeenum";
import { Tag } from "./tag";
export declare class CreateAutoMlJobRequest extends SpeakeasyBase {
    autoMlJobConfig?: AutoMlJobConfig;
    autoMlJobName: string;
    autoMlJobObjective?: AutoMlJobObjective;
    generateCandidateDefinitionsOnly?: boolean;
    inputDataConfig: AutoMlChannel[];
    modelDeployConfig?: ModelDeployConfig;
    outputDataConfig: AutoMlOutputDataConfig;
    problemType?: ProblemTypeEnum;
    roleArn: string;
    tags?: Tag[];
}
