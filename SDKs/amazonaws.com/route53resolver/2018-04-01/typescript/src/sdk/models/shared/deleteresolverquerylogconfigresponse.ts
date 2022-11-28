import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverQueryLogConfig } from "./resolverquerylogconfig";



export class DeleteResolverQueryLogConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverQueryLogConfig" })
  resolverQueryLogConfig?: ResolverQueryLogConfig;
}
