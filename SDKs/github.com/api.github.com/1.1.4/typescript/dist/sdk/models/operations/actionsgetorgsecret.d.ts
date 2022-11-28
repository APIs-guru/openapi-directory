import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetOrgSecretPathParams extends SpeakeasyBase {
    org: string;
    secretName: string;
}
export declare class ActionsGetOrgSecretRequest extends SpeakeasyBase {
    pathParams: ActionsGetOrgSecretPathParams;
}
export declare class ActionsGetOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    organizationActionsSecret?: shared.OrganizationActionsSecret;
}
