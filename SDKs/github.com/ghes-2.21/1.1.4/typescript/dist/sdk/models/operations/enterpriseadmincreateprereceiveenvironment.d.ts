import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminCreatePreReceiveEnvironmentRequestBody extends SpeakeasyBase {
    imageUrl: string;
    name: string;
}
export declare class EnterpriseAdminCreatePreReceiveEnvironmentRequest extends SpeakeasyBase {
    request?: EnterpriseAdminCreatePreReceiveEnvironmentRequestBody;
}
export declare class EnterpriseAdminCreatePreReceiveEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
