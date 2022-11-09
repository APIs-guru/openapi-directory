import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterEcsClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EcsClusterArn" })
  ecsClusterArn: string;
}
