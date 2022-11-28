import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminSuspendUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class EnterpriseAdminSuspendUserRequestBody extends SpeakeasyBase {
    reason?: string;
}
export declare class EnterpriseAdminSuspendUserRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminSuspendUserPathParams;
    request?: EnterpriseAdminSuspendUserRequestBody;
}
export declare class EnterpriseAdminSuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
