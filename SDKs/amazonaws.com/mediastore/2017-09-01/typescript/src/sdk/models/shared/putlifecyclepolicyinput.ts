import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutLifecyclePolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;

  @SpeakeasyMetadata({ data: "json, name=LifecyclePolicy" })
  lifecyclePolicy: string;
}
