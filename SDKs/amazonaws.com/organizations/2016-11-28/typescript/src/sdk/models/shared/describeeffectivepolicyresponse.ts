import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EffectivePolicy } from "./effectivepolicy";



export class DescribeEffectivePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EffectivePolicy" })
  effectivePolicy?: EffectivePolicy;
}
