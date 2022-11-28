import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetPreReceiveEnvironmentPathParams extends SpeakeasyBase {
    preReceiveEnvironmentId: number;
}
export declare class EnterpriseAdminGetPreReceiveEnvironmentRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetPreReceiveEnvironmentPathParams;
}
export declare class EnterpriseAdminGetPreReceiveEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
