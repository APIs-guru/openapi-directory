import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutResolverQueryLogConfigPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=ResolverQueryLogConfigPolicy" })
  resolverQueryLogConfigPolicy: string;
}
