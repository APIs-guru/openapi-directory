import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchVoteYesnoQueryParams extends SpeakeasyBase {
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
    searchDbVoteYesnoVote?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchVoteYesnoRequest extends SpeakeasyBase {
    queryParams: SearchVoteYesnoQueryParams;
}
export declare class SearchVoteYesnoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
