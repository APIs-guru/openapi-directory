import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAttributeGroupPathParams extends SpeakeasyBase {
    attributeGroup: string;
}
export declare class DeleteAttributeGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAttributeGroupRequest extends SpeakeasyBase {
    pathParams: DeleteAttributeGroupPathParams;
    headers: DeleteAttributeGroupHeaders;
}
export declare class DeleteAttributeGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteAttributeGroupResponse?: shared.DeleteAttributeGroupResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
