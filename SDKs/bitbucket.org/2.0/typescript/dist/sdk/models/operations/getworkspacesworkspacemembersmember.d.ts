import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspaceMembersMemberPathParams extends SpeakeasyBase {
    member: string;
    workspace: string;
}
export declare class GetWorkspacesWorkspaceMembersMemberSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetWorkspacesWorkspaceMembersMemberRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspaceMembersMemberPathParams;
    security: GetWorkspacesWorkspaceMembersMemberSecurity;
}
export declare class GetWorkspacesWorkspaceMembersMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    workspaceMembership?: Map<string, any>;
}
