import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListPeopleHasExternalIdEnum {
    True = "true",
    False = "false"
}
export declare class ListPeopleQueryParams extends SpeakeasyBase {
    authority?: string;
    hasExternalId?: ListPeopleHasExternalIdEnum[];
    id?: string[];
    idType?: string;
    page?: number;
    pageSize?: number;
    partnerId?: string[];
    partnerPid?: string[];
    pid?: string[];
    programme?: string;
    q?: string;
}
export declare class ListPeopleRequest extends SpeakeasyBase {
    queryParams: ListPeopleQueryParams;
}
export declare class ListPeopleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
