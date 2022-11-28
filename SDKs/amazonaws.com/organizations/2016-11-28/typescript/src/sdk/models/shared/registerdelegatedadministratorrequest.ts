import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterDelegatedAdministratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=ServicePrincipal" })
  servicePrincipal: string;
}
