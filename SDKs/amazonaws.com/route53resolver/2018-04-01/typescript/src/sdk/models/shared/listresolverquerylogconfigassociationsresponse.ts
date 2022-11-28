import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverQueryLogConfigAssociation } from "./resolverquerylogconfigassociation";



export class ListResolverQueryLogConfigAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverQueryLogConfigAssociations", elemType: ResolverQueryLogConfigAssociation })
  resolverQueryLogConfigAssociations?: ResolverQueryLogConfigAssociation[];

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalFilteredCount" })
  totalFilteredCount?: number;
}
