import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShareDetails } from "./sharedetails";
import { ShareStatusEnum } from "./sharestatusenum";



export class DescribePortfolioShareStatusOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationNodeValue" })
  organizationNodeValue?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioId" })
  portfolioId?: string;

  @SpeakeasyMetadata({ data: "json, name=PortfolioShareToken" })
  portfolioShareToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ShareDetails" })
  shareDetails?: ShareDetails;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ShareStatusEnum;
}
