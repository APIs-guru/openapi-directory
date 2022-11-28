import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResolverRulePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;
}
