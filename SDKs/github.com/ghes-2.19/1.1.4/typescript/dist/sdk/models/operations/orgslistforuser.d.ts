import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class OrgsListForUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class OrgsListForUserRequest extends SpeakeasyBase {
    pathParams: OrgsListForUserPathParams;
    queryParams: OrgsListForUserQueryParams;
}
export declare class OrgsListForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    organizationSimples?: shared.OrganizationSimple[];
}
