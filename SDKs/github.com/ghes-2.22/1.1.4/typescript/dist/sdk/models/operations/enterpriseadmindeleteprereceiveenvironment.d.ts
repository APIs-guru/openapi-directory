import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminDeletePreReceiveEnvironmentPathParams extends SpeakeasyBase {
    preReceiveEnvironmentId: number;
}
export declare class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
    resource?: string;
}
export declare class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson extends SpeakeasyBase {
    errors?: EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors[];
    message?: string;
}
export declare class EnterpriseAdminDeletePreReceiveEnvironmentRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminDeletePreReceiveEnvironmentPathParams;
}
export declare class EnterpriseAdminDeletePreReceiveEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonObject?: EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson;
}
