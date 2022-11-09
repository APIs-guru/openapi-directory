import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateDelegateToResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityId" })
  entityId: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
