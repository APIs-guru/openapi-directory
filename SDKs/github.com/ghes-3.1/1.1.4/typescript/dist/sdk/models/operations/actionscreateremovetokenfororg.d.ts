import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsCreateRemoveTokenForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsCreateRemoveTokenForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsCreateRemoveTokenForOrgPathParams;
}
export declare class ActionsCreateRemoveTokenForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationToken?: shared.AuthenticationToken;
}
