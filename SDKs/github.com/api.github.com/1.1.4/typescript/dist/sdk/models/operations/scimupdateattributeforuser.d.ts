import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScimUpdateAttributeForUserPathParams extends SpeakeasyBase {
    org: string;
    scimUserId: string;
}
export declare enum ScimUpdateAttributeForUserRequestBodyOperationsOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace"
}
export declare class ScimUpdateAttributeForUserRequestBodyOperationsValue1 extends SpeakeasyBase {
    active?: boolean;
    externalId?: string;
    familyName?: string;
    givenName?: string;
    userName?: string;
}
export declare class ScimUpdateAttributeForUserRequestBodyOperationsValue2 extends SpeakeasyBase {
    primary?: boolean;
    value?: string;
}
export declare class ScimUpdateAttributeForUserRequestBodyOperations extends SpeakeasyBase {
    op: ScimUpdateAttributeForUserRequestBodyOperationsOpEnum;
    path?: string;
    value?: any;
}
export declare class ScimUpdateAttributeForUserRequestBody extends SpeakeasyBase {
    operations: ScimUpdateAttributeForUserRequestBodyOperations[];
    schemas?: string[];
}
export declare class ScimUpdateAttributeForUserRequest extends SpeakeasyBase {
    pathParams: ScimUpdateAttributeForUserPathParams;
    request?: ScimUpdateAttributeForUserRequestBody;
}
export declare class ScimUpdateAttributeForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    scimError?: shared.ScimError;
    scimUser?: shared.ScimUser;
}
