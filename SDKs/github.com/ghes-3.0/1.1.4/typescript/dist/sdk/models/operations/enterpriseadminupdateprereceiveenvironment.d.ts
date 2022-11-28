import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminUpdatePreReceiveEnvironmentPathParams extends SpeakeasyBase {
    preReceiveEnvironmentId: number;
}
export declare class EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody extends SpeakeasyBase {
    imageUrl?: string;
    name?: string;
}
export declare class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
    resource?: string;
}
export declare class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson extends SpeakeasyBase {
    errors?: EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors[];
    message?: string;
}
export declare class EnterpriseAdminUpdatePreReceiveEnvironmentRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdatePreReceiveEnvironmentPathParams;
    request?: EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody;
}
export declare class EnterpriseAdminUpdatePreReceiveEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonObject?: EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJson;
    preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
