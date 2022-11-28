import { SpeakeasyBase } from "../../../internal/utils";
import { InputConfig } from "./inputconfig";
import { OutputConfig } from "./outputconfig";
import { StoppingCondition } from "./stoppingcondition";
import { Tag } from "./tag";
import { NeoVpcConfig } from "./neovpcconfig";
export declare class CreateCompilationJobRequest extends SpeakeasyBase {
    compilationJobName: string;
    inputConfig: InputConfig;
    outputConfig: OutputConfig;
    roleArn: string;
    stoppingCondition: StoppingCondition;
    tags?: Tag[];
    vpcConfig?: NeoVpcConfig;
}
