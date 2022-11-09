import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoAccountingExtendedGrants extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowAllGrants, form, name=allowAllGrants;" })
  allowAllGrants?: boolean;

  @Metadata({ data: "json, name=allowGroupCreation, form, name=allowGroupCreation;" })
  allowGroupCreation?: boolean;
}
