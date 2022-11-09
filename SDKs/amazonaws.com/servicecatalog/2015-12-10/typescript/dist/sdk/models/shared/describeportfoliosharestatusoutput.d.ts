import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareDetails } from "./sharedetails";
import { ShareStatusEnum } from "./sharestatusenum";
export declare class DescribePortfolioShareStatusOutput extends SpeakeasyBase {
    organizationNodeValue?: string;
    portfolioId?: string;
    portfolioShareToken?: string;
    shareDetails?: ShareDetails;
    status?: ShareStatusEnum;
}
