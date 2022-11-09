import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBoulderCampaignContributionsQueryParams extends SpeakeasyBase {
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
    searchDbBoulderCampaignContributionsAmendedDate?: string;
    searchDbBoulderCampaignContributionsAnonymous?: string;
    searchDbBoulderCampaignContributionsCandidate?: string;
    searchDbBoulderCampaignContributionsCity?: string;
    searchDbBoulderCampaignContributionsCommittee?: string;
    searchDbBoulderCampaignContributionsCommitteeNum?: string;
    searchDbBoulderCampaignContributionsContribution?: number;
    searchDbBoulderCampaignContributionsContributionType?: string;
    searchDbBoulderCampaignContributionsFilingDate?: string;
    searchDbBoulderCampaignContributionsFirstName?: string;
    searchDbBoulderCampaignContributionsFromCandidate?: string;
    searchDbBoulderCampaignContributionsLastName?: string;
    searchDbBoulderCampaignContributionsMatch?: number;
    searchDbBoulderCampaignContributionsOfficialFiling?: string;
    searchDbBoulderCampaignContributionsState?: string;
    searchDbBoulderCampaignContributionsStreet?: string;
    searchDbBoulderCampaignContributionsTransactionDate?: string;
    searchDbBoulderCampaignContributionsType?: string;
    searchDbBoulderCampaignContributionsZip?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBoulderCampaignContributionsRequest extends SpeakeasyBase {
    queryParams: SearchBoulderCampaignContributionsQueryParams;
}
export declare class SearchBoulderCampaignContributionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
