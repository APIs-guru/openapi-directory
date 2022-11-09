import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverQueryLogConfig } from "./resolverquerylogconfig";


export class CreateResolverQueryLogConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverQueryLogConfig" })
  resolverQueryLogConfig?: ResolverQueryLogConfig;
}
