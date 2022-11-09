import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchCampaignExpendituresQueryParams extends SpeakeasyBase {
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
    searchDbCampaignExpendituresAmount?: number;
    searchDbCampaignExpendituresCity?: string;
    searchDbCampaignExpendituresCommittee?: string;
    searchDbCampaignExpendituresLocation?: string;
    searchDbCampaignExpendituresMemoText?: string;
    searchDbCampaignExpendituresParty?: string;
    searchDbCampaignExpendituresPurpose?: string;
    searchDbCampaignExpendituresRecipient?: string;
    searchDbCampaignExpendituresState?: string;
    searchDbCampaignExpendituresTransactionDate?: string;
    searchDbCampaignExpendituresZipCode?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchCampaignExpendituresRequest extends SpeakeasyBase {
    queryParams: SearchCampaignExpendituresQueryParams;
}
export declare class SearchCampaignExpendituresResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
