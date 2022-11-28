import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterDelegatedAdministratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=ServicePrincipal" })
  servicePrincipal: string;
}
