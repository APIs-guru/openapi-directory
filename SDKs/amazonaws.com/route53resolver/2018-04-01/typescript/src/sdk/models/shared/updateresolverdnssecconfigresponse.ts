import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverDnssecConfig } from "./resolverdnssecconfig";


export class UpdateResolverDnssecConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverDNSSECConfig" })
  resolverDnssecConfig?: ResolverDnssecConfig;
}
