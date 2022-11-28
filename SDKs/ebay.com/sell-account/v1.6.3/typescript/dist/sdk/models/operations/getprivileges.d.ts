import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPrivilegesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetPrivilegesRequest extends SpeakeasyBase {
    security: GetPrivilegesSecurity;
}
export declare class GetPrivilegesResponse extends SpeakeasyBase {
    contentType: string;
    sellingPrivileges?: shared.SellingPrivileges;
    statusCode: number;
}
