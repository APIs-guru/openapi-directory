import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTypeMetametaDictionaryQueryParams extends SpeakeasyBase {
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
    searchTypeMetametaDictionaryDictionaryType?: string;
    searchTypeMetametaDictionaryFieldIndex?: number;
    searchTypeMetametaDictionaryHandlerClass?: string;
    searchTypeMetametaDictionaryIsgroup?: boolean;
    searchTypeMetametaDictionaryProperties?: string;
    searchTypeMetametaDictionaryShortName?: string;
    searchTypeMetametaDictionarySuperType?: string;
    searchTypeMetametaDictionaryWikiText?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTypeMetametaDictionaryRequest extends SpeakeasyBase {
    queryParams: SearchTypeMetametaDictionaryQueryParams;
}
export declare class SearchTypeMetametaDictionaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
