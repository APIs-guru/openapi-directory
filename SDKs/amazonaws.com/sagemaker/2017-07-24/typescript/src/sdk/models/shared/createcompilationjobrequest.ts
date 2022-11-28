import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputConfig } from "./inputconfig";
import { OutputConfig } from "./outputconfig";
import { StoppingCondition } from "./stoppingcondition";
import { Tag } from "./tag";
import { NeoVpcConfig } from "./neovpcconfig";



export class CreateCompilationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;

  @SpeakeasyMetadata({ data: "json, name=InputConfig" })
  inputConfig: InputConfig;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig: OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: NeoVpcConfig;
}
