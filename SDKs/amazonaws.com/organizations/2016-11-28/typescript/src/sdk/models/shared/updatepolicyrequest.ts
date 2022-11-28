import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId: string;
}
