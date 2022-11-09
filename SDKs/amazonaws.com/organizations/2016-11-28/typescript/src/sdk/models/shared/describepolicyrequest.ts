import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyId" })
  policyId: string;
}
