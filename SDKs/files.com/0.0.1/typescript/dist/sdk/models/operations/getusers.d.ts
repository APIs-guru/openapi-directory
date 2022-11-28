import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Map<string, any>;
    filterGt?: Map<string, any>;
    filterGteq?: Map<string, any>;
    filterLike?: Map<string, any>;
    filterLt?: Map<string, any>;
    filterLteq?: Map<string, any>;
    ids?: string;
    perPage?: number;
    qAdmin?: string;
    qAllowedIps?: string;
    qEmail?: string;
    qNotes?: string;
    qPasswordValidityDays?: string;
    qSslRequired?: string;
    qUsername?: string;
    search?: string;
    sortBy?: Map<string, any>;
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userEntities?: shared.UserEntity[];
}
