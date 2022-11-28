import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
