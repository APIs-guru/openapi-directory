import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterDelegatedAdministratorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=ServicePrincipal" })
  servicePrincipal: string;
}
