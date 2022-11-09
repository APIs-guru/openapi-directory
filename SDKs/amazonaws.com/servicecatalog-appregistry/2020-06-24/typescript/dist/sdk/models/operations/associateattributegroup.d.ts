import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AssociateAttributeGroupPathParams extends SpeakeasyBase {
    application: string;
    attributeGroup: string;
}
export declare class AssociateAttributeGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateAttributeGroupRequest extends SpeakeasyBase {
    pathParams: AssociateAttributeGroupPathParams;
    headers: AssociateAttributeGroupHeaders;
}
export declare class AssociateAttributeGroupResponse extends SpeakeasyBase {
    associateAttributeGroupResponse?: shared.AssociateAttributeGroupResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
