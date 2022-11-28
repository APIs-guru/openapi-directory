import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignSummary } from "./campaignsummary";
export declare class ListCampaignsResponse extends SpeakeasyBase {
    campaigns?: CampaignSummary[];
    nextToken?: string;
}
