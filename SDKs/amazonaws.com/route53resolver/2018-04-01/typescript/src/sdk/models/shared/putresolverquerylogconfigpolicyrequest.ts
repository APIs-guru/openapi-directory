import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutResolverQueryLogConfigPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverQueryLogConfigPolicy" })
  resolverQueryLogConfigPolicy: string;
}
