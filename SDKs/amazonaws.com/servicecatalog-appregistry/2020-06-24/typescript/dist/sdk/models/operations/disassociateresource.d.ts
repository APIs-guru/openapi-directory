import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateResourceResourceTypeEnum {
    CfnStack = "CFN_STACK"
}
export declare class DisassociateResourcePathParams extends SpeakeasyBase {
    application: string;
    resource: string;
    resourceType: DisassociateResourceResourceTypeEnum;
}
export declare class DisassociateResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateResourceRequest extends SpeakeasyBase {
    pathParams: DisassociateResourcePathParams;
    headers: DisassociateResourceHeaders;
}
export declare class DisassociateResourceResponse extends SpeakeasyBase {
    contentType: string;
    disassociateResourceResponse?: shared.DisassociateResourceResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
