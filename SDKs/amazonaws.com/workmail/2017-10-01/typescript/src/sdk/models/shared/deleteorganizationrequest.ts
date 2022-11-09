import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=DeleteDirectory" })
  deleteDirectory: boolean;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
