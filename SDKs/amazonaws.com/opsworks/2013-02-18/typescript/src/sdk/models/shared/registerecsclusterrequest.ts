import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterEcsClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EcsClusterArn" })
  ecsClusterArn: string;

  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}
