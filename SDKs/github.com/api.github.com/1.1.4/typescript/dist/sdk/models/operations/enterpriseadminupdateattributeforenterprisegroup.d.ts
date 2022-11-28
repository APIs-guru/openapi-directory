import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams extends SpeakeasyBase {
    enterprise: string;
    scimGroupId: string;
}
export declare enum EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum {
    AddLower = "add",
    AddMixed = "Add",
    RemoveLower = "remove",
    RemoveMixed = "Remove",
    ReplaceLower = "replace",
    ReplaceMixed = "Replace"
}
export declare class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations extends SpeakeasyBase {
    op: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum;
    path?: string;
    value?: any;
}
export declare class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody extends SpeakeasyBase {
    operations: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations[];
    schemas: string[];
}
export declare class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams;
    request?: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody;
}
export declare class EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
