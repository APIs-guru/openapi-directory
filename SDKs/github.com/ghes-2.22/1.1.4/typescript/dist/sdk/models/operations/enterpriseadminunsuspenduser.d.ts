import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminUnsuspendUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class EnterpriseAdminUnsuspendUserRequestBody extends SpeakeasyBase {
    reason?: string;
}
export declare class EnterpriseAdminUnsuspendUserRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUnsuspendUserPathParams;
    request?: EnterpriseAdminUnsuspendUserRequestBody;
}
export declare class EnterpriseAdminUnsuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
