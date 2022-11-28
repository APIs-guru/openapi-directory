import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationSummary } from "./organizationsummary";



export class ListOrganizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationSummaries", elemType: OrganizationSummary })
  organizationSummaries?: OrganizationSummary[];
}
