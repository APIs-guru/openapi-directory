import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterEcsClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EcsClusterArn" })
  ecsClusterArn: string;
}
