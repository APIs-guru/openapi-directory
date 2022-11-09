import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAliasRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alias" })
  alias: string;

  @Metadata({ data: "json, name=EntityId" })
  entityId: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
