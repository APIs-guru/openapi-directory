import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoAccountingExtendedGrants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAllGrants, form, name=allowAllGrants;" })
  allowAllGrants?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowGroupCreation, form, name=allowGroupCreation;" })
  allowGroupCreation?: boolean;
}
