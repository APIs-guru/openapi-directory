import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrganizationSummary
/** 
 * The representation of an organization.
**/
export class OrganizationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alias" })
  alias?: string;

  @Metadata({ data: "json, name=DefaultMailDomain" })
  defaultMailDomain?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}
