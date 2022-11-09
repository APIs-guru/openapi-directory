import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputConfig } from "./inputconfig";
import { OutputConfig } from "./outputconfig";
import { StoppingCondition } from "./stoppingcondition";
import { Tag } from "./tag";
import { NeoVpcConfig } from "./neovpcconfig";


export class CreateCompilationJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;

  @Metadata({ data: "json, name=InputConfig" })
  inputConfig: InputConfig;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig: OutputConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: NeoVpcConfig;
}
