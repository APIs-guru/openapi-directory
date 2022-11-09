import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutLifecyclePolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;

  @Metadata({ data: "json, name=LifecyclePolicy" })
  lifecyclePolicy: string;
}
