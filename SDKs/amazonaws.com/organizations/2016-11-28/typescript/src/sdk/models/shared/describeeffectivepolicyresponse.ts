import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EffectivePolicy } from "./effectivepolicy";


export class DescribeEffectivePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EffectivePolicy" })
  effectivePolicy?: EffectivePolicy;
}
