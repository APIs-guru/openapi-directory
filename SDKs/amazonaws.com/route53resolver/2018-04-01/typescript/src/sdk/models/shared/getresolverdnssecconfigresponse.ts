import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverDnssecConfig } from "./resolverdnssecconfig";



export class GetResolverDnssecConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverDNSSECConfig" })
  resolverDnssecConfig?: ResolverDnssecConfig;
}
