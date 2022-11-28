import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetachPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId: string;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId: string;
}
