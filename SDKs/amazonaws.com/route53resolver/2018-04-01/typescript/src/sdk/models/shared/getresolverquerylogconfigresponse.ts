import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverQueryLogConfig } from "./resolverquerylogconfig";



export class GetResolverQueryLogConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverQueryLogConfig" })
  resolverQueryLogConfig?: ResolverQueryLogConfig;
}
