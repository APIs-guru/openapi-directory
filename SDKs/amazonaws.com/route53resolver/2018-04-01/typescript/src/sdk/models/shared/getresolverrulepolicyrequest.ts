import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResolverRulePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;
}
