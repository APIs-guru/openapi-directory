import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScimSetInformationForProvisionedUserPathParams extends SpeakeasyBase {
    org: string;
    scimUserId: string;
}
export declare class ScimSetInformationForProvisionedUserRequestBodyEmails extends SpeakeasyBase {
    primary?: boolean;
    type?: string;
    value: string;
}
export declare class ScimSetInformationForProvisionedUserRequestBodyName extends SpeakeasyBase {
    familyName: string;
    formatted?: string;
    givenName: string;
}
export declare class ScimSetInformationForProvisionedUserRequestBody extends SpeakeasyBase {
    active?: boolean;
    displayName?: string;
    emails: ScimSetInformationForProvisionedUserRequestBodyEmails[];
    externalId?: string;
    groups?: string[];
    name: ScimSetInformationForProvisionedUserRequestBodyName;
    schemas?: string[];
    userName: string;
}
export declare class ScimSetInformationForProvisionedUserRequest extends SpeakeasyBase {
    pathParams: ScimSetInformationForProvisionedUserPathParams;
    request?: ScimSetInformationForProvisionedUserRequestBody;
}
export declare class ScimSetInformationForProvisionedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimError?: shared.ScimError;
    scimUser?: shared.ScimUser;
}
