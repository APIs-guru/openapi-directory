import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverQueryLogConfigAssociation } from "./resolverquerylogconfigassociation";


export class GetResolverQueryLogConfigAssociationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverQueryLogConfigAssociation" })
  resolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}
