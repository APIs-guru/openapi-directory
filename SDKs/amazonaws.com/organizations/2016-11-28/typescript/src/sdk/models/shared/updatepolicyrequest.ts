import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Content" })
  content?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PolicyId" })
  policyId: string;
}
