import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams extends SpeakeasyBase {
    enterprise: string;
    scimUserId: string;
}
export declare class EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody extends SpeakeasyBase {
    operations: Map<string, any>[];
    schemas: string[];
}
export declare class EnterpriseAdminUpdateAttributeForEnterpriseUserRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams;
    request?: EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody;
}
export declare class EnterpriseAdminUpdateAttributeForEnterpriseUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimEnterpriseUser?: shared.ScimEnterpriseUser;
}
