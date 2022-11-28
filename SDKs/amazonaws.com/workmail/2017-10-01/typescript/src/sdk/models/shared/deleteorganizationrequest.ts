import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DeleteDirectory" })
  deleteDirectory: boolean;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
