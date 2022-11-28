import { SpeakeasyBase } from "../../../internal/utils";
export declare class Search2017BoulderElectionExpendituresQueryParams extends SpeakeasyBase {
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
    searchDb2017BoulderElectionExpendituresCity?: string;
    searchDb2017BoulderElectionExpendituresCommittee?: string;
    searchDb2017BoulderElectionExpendituresExpenditure?: number;
    searchDb2017BoulderElectionExpendituresName?: string;
    searchDb2017BoulderElectionExpendituresPurpose?: string;
    searchDb2017BoulderElectionExpendituresState?: string;
    searchDb2017BoulderElectionExpendituresStreet?: string;
    searchDb2017BoulderElectionExpendituresTransactionDate?: string;
    searchDb2017BoulderElectionExpendituresZip?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class Search2017BoulderElectionExpendituresRequest extends SpeakeasyBase {
    queryParams: Search2017BoulderElectionExpendituresQueryParams;
}
export declare class Search2017BoulderElectionExpendituresResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
