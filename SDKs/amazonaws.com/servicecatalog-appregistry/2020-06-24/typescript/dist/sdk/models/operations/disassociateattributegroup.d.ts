import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DisassociateAttributeGroupPathParams extends SpeakeasyBase {
    application: string;
    attributeGroup: string;
}
export declare class DisassociateAttributeGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateAttributeGroupRequest extends SpeakeasyBase {
    pathParams: DisassociateAttributeGroupPathParams;
    headers: DisassociateAttributeGroupHeaders;
}
export declare class DisassociateAttributeGroupResponse extends SpeakeasyBase {
    contentType: string;
    disassociateAttributeGroupResponse?: shared.DisassociateAttributeGroupResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
