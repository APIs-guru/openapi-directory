import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAttributeGroupPathParams extends SpeakeasyBase {
    attributeGroup: string;
}
export declare class UpdateAttributeGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAttributeGroupRequestBody extends SpeakeasyBase {
    attributes?: string;
    description?: string;
    name?: string;
}
export declare class UpdateAttributeGroupRequest extends SpeakeasyBase {
    pathParams: UpdateAttributeGroupPathParams;
    headers: UpdateAttributeGroupHeaders;
    request: UpdateAttributeGroupRequestBody;
}
export declare class UpdateAttributeGroupResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateAttributeGroupResponse?: shared.UpdateAttributeGroupResponse;
    validationException?: any;
}
