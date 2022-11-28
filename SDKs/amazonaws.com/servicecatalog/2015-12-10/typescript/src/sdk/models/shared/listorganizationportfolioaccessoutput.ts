import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationNode } from "./organizationnode";



export class ListOrganizationPortfolioAccessOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationNodes", elemType: OrganizationNode })
  organizationNodes?: OrganizationNode[];
}
