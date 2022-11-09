import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrganizationNode } from "./organizationnode";


export class ListOrganizationPortfolioAccessOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=OrganizationNodes", elemType: shared.OrganizationNode })
  organizationNodes?: OrganizationNode[];
}
