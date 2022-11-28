import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAttributeGroupPathParams extends SpeakeasyBase {
    attributeGroup: string;
}
export declare class GetAttributeGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttributeGroupRequest extends SpeakeasyBase {
    pathParams: GetAttributeGroupPathParams;
    headers: GetAttributeGroupHeaders;
}
export declare class GetAttributeGroupResponse extends SpeakeasyBase {
    contentType: string;
    getAttributeGroupResponse?: shared.GetAttributeGroupResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
