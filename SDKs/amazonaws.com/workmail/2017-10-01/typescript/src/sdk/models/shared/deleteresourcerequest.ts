import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
