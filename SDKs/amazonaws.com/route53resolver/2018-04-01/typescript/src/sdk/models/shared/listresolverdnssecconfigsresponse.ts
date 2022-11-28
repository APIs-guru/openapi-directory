import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverDnssecConfig } from "./resolverdnssecconfig";



export class ListResolverDnssecConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverDnssecConfigs", elemType: ResolverDnssecConfig })
  resolverDnssecConfigs?: ResolverDnssecConfig[];
}
