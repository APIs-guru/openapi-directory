import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBoulder2017ElectionContributionsQueryParams extends SpeakeasyBase {
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
    searchDbBoulder2017ElectionContributionsAmount?: number;
    searchDbBoulder2017ElectionContributionsCity?: string;
    searchDbBoulder2017ElectionContributionsCommittee?: string;
    searchDbBoulder2017ElectionContributionsContributionType?: string;
    searchDbBoulder2017ElectionContributionsDate?: string;
    searchDbBoulder2017ElectionContributionsFirstName?: string;
    searchDbBoulder2017ElectionContributionsFromCandidate?: string;
    searchDbBoulder2017ElectionContributionsLastName?: string;
    searchDbBoulder2017ElectionContributionsLocation?: string;
    searchDbBoulder2017ElectionContributionsMatchAmount?: number;
    searchDbBoulder2017ElectionContributionsState?: string;
    searchDbBoulder2017ElectionContributionsStreet?: string;
    searchDbBoulder2017ElectionContributionsYtdAmount?: number;
    searchDbBoulder2017ElectionContributionsZip?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBoulder2017ElectionContributionsRequest extends SpeakeasyBase {
    queryParams: SearchBoulder2017ElectionContributionsQueryParams;
}
export declare class SearchBoulder2017ElectionContributionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
