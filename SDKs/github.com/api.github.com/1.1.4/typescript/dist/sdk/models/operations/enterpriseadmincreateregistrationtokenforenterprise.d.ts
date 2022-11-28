import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams;
}
export declare class EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationToken?: shared.AuthenticationToken;
}
