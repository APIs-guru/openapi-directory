import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchCampaignDonorsQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbCampaignDonorsAmount?: number;
    searchDbCampaignDonorsCity?: string;
    searchDbCampaignDonorsCommittee?: string;
    searchDbCampaignDonorsDate?: string;
    searchDbCampaignDonorsDonor?: string;
    searchDbCampaignDonorsEmployer?: string;
    searchDbCampaignDonorsGender?: string;
    searchDbCampaignDonorsLocation?: string;
    searchDbCampaignDonorsOccupation?: string;
    searchDbCampaignDonorsParty?: string;
    searchDbCampaignDonorsState?: string;
    searchDbCampaignDonorsZipCode?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchCampaignDonorsRequest extends SpeakeasyBase {
    queryParams: SearchCampaignDonorsQueryParams;
}
export declare class SearchCampaignDonorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
