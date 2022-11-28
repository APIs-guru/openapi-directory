import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLifecyclePolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LifecyclePolicy" })
  lifecyclePolicy: string;
}
