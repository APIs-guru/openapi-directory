import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterEcsClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EcsClusterArn" })
  ecsClusterArn: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}
