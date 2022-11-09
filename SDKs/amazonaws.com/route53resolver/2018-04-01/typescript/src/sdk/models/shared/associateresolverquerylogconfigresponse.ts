import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverQueryLogConfigAssociation } from "./resolverquerylogconfigassociation";


export class AssociateResolverQueryLogConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverQueryLogConfigAssociation" })
  resolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}
