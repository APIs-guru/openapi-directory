import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeCensusAcsQueryParams extends SpeakeasyBase {
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
    searchTypeCensusAcsFields?: string;
    searchTypeCensusAcsForType?: string;
    searchTypeCensusAcsInType1?: string;
    searchTypeCensusAcsInType2?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeCensusAcsRequest extends SpeakeasyBase {
    queryParams: SearchTypeCensusAcsQueryParams;
}
export declare class SearchTypeCensusAcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
