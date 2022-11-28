import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrganizationSummary
/** 
 * The representation of an organization.
**/
export class OrganizationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultMailDomain" })
  defaultMailDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}
