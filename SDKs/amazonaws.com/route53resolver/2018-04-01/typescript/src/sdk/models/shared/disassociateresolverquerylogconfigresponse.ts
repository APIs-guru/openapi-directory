import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverQueryLogConfigAssociation } from "./resolverquerylogconfigassociation";



export class DisassociateResolverQueryLogConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverQueryLogConfigAssociation" })
  resolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
}
