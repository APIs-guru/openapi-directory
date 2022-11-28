import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetElectionDatesOfficeSoughtEnum {
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetElectionDatesQueryParams extends SpeakeasyBase {
    apiKey: string;
    electionDistrict?: string[];
    electionParty?: string[];
    electionState?: string[];
    electionTypeId?: string[];
    electionYear?: string[];
    maxCreateDate?: Date;
    maxElectionDate?: Date;
    maxPrimaryGeneralDate?: Date;
    maxUpdateDate?: Date;
    minCreateDate?: Date;
    minElectionDate?: Date;
    minPrimaryGeneralDate?: Date;
    minUpdateDate?: Date;
    officeSought?: GetElectionDatesOfficeSoughtEnum[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetElectionDatesDefaultApplicationJson extends SpeakeasyBase {
    pagination?: shared.OffsetInfo;
    results?: shared.ElectionDate[];
}
export declare class GetElectionDatesRequest extends SpeakeasyBase {
    queryParams: GetElectionDatesQueryParams;
}
export declare class GetElectionDatesResponse extends SpeakeasyBase {
    contentType: string;
    getElectionDatesDefaultApplicationJsonObject?: GetElectionDatesDefaultApplicationJson;
    statusCode: number;
}
