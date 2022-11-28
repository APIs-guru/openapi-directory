import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListBlockedUsersPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsListBlockedUsers415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class OrgsListBlockedUsersRequest extends SpeakeasyBase {
    pathParams: OrgsListBlockedUsersPathParams;
}
export declare class OrgsListBlockedUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    orgsListBlockedUsers415ApplicationJsonObject?: OrgsListBlockedUsers415ApplicationJson;
    simpleUsers?: shared.SimpleUser[];
}
