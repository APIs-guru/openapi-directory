import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminCreateRemoveTokenForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminCreateRemoveTokenForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminCreateRemoveTokenForEnterprisePathParams;
}
export declare class EnterpriseAdminCreateRemoveTokenForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationToken?: shared.AuthenticationToken;
}
