import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScimGetProvisioningInformationForUserPathParams extends SpeakeasyBase {
    org: string;
    scimUserId: string;
}
export declare class ScimGetProvisioningInformationForUserRequest extends SpeakeasyBase {
    pathParams: ScimGetProvisioningInformationForUserPathParams;
}
export declare class ScimGetProvisioningInformationForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimError?: shared.ScimError;
    scimUser?: shared.ScimUser;
}
