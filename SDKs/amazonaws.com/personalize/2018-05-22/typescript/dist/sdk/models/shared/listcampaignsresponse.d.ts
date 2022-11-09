import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignSummary } from "./campaignsummary";
export declare class ListCampaignsResponse extends SpeakeasyBase {
    campaigns?: CampaignSummary[];
    nextToken?: string;
}
