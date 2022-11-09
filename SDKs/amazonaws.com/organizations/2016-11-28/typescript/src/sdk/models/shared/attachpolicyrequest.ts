import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyId" })
  policyId: string;

  @Metadata({ data: "json, name=TargetId" })
  targetId: string;
}
