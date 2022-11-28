import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignConfig } from "./campaignconfig";
export declare class CreateCampaignRequest extends SpeakeasyBase {
    campaignConfig?: CampaignConfig;
    minProvisionedTps?: number;
    name: string;
    solutionVersionArn: string;
}
