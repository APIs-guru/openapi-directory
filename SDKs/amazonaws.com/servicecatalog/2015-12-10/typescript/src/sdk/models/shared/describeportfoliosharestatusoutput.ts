import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareDetails } from "./sharedetails";
import { ShareStatusEnum } from "./sharestatusenum";


export class DescribePortfolioShareStatusOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationNodeValue" })
  organizationNodeValue?: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId?: string;

  @Metadata({ data: "json, name=PortfolioShareToken" })
  portfolioShareToken?: string;

  @Metadata({ data: "json, name=ShareDetails" })
  shareDetails?: ShareDetails;

  @Metadata({ data: "json, name=Status" })
  status?: ShareStatusEnum;
}
