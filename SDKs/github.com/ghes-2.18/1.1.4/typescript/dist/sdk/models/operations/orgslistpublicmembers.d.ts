import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListPublicMembersPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsListPublicMembersQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class OrgsListPublicMembersRequest extends SpeakeasyBase {
    pathParams: OrgsListPublicMembersPathParams;
    queryParams: OrgsListPublicMembersQueryParams;
}
export declare class OrgsListPublicMembersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
}
