import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId: string;
}
