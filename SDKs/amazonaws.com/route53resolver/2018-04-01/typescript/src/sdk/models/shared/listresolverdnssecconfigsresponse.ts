import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResolverDnssecConfig } from "./resolverdnssecconfig";


export class ListResolverDnssecConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResolverDnssecConfigs", elemType: shared.ResolverDnssecConfig })
  resolverDnssecConfigs?: ResolverDnssecConfig[];
}
