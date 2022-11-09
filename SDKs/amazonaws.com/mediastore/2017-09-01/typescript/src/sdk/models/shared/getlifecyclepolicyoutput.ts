import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLifecyclePolicyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=LifecyclePolicy" })
  lifecyclePolicy: string;
}
