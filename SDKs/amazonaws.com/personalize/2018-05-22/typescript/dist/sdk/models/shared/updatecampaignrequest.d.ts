import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignConfig } from "./campaignconfig";
export declare class UpdateCampaignRequest extends SpeakeasyBase {
    campaignArn: string;
    campaignConfig?: CampaignConfig;
    minProvisionedTps?: number;
    solutionVersionArn?: string;
}
