import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchTypeMetametaFieldQueryParams extends SpeakeasyBase {
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
    searchTypeMetametaFieldDatabaseColumnSize?: number;
    searchTypeMetametaFieldDatatype?: string;
    searchTypeMetametaFieldEnumerationValues?: string;
    searchTypeMetametaFieldFieldId?: string;
    searchTypeMetametaFieldFieldIndex?: number;
    searchTypeMetametaFieldMissing?: string;
    searchTypeMetametaFieldProperties?: string;
    searchTypeMetametaFieldUnit?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeMetametaFieldRequest extends SpeakeasyBase {
    queryParams: SearchTypeMetametaFieldQueryParams;
}
export declare class SearchTypeMetametaFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
