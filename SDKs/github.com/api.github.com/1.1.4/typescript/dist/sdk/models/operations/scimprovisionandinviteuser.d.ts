import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScimProvisionAndInviteUserPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ScimProvisionAndInviteUserRequestBodyEmails extends SpeakeasyBase {
    primary?: boolean;
    type?: string;
    value: string;
}
export declare class ScimProvisionAndInviteUserRequestBodyName extends SpeakeasyBase {
    familyName: string;
    formatted?: string;
    givenName: string;
}
export declare class ScimProvisionAndInviteUserRequestBody extends SpeakeasyBase {
    active?: boolean;
    displayName?: string;
    emails: ScimProvisionAndInviteUserRequestBodyEmails[];
    externalId?: string;
    groups?: string[];
    name: ScimProvisionAndInviteUserRequestBodyName;
    schemas?: string[];
    userName: string;
}
export declare class ScimProvisionAndInviteUserRequest extends SpeakeasyBase {
    pathParams: ScimProvisionAndInviteUserPathParams;
    request?: ScimProvisionAndInviteUserRequestBody;
}
export declare class ScimProvisionAndInviteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimError?: shared.ScimError;
    scimUser?: shared.ScimUser;
}
