import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResolverQueryLogConfigAssociation } from "./resolverquerylogconfigassociation";


export class ListResolverQueryLogConfigAssociationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResolverQueryLogConfigAssociations", elemType: shared.ResolverQueryLogConfigAssociation })
  resolverQueryLogConfigAssociations?: ResolverQueryLogConfigAssociation[];

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;

  @Metadata({ data: "json, name=TotalFilteredCount" })
  totalFilteredCount?: number;
}
