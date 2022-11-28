import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchCommitteeDonationsQueryParams extends SpeakeasyBase {
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
    searchDbCommitteeDonationsAmount?: number;
    searchDbCommitteeDonationsCity?: string;
    searchDbCommitteeDonationsCommittee?: string;
    searchDbCommitteeDonationsDate?: string;
    searchDbCommitteeDonationsEmployer?: string;
    searchDbCommitteeDonationsLocation?: string;
    searchDbCommitteeDonationsOccupation?: string;
    searchDbCommitteeDonationsRecipient?: string;
    searchDbCommitteeDonationsState?: string;
    searchDbCommitteeDonationsZipCode?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchCommitteeDonationsRequest extends SpeakeasyBase {
    queryParams: SearchCommitteeDonationsQueryParams;
}
export declare class SearchCommitteeDonationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
