import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverQueryLogConfigAssociation } from "./resolverquerylogconfigassociation";


export class DisassociateResolverQueryLogConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverQueryLogConfigAssociation" })
  resolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}
