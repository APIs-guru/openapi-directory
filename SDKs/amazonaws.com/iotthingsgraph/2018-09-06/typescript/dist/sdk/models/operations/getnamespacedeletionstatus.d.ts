import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetNamespaceDeletionStatusXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetNamespaceDeletionStatus = "IotThingsGraphFrontEndService.GetNamespaceDeletionStatus"
}
export declare class GetNamespaceDeletionStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetNamespaceDeletionStatusXAmzTargetEnum;
}
export declare class GetNamespaceDeletionStatusRequest extends SpeakeasyBase {
    headers: GetNamespaceDeletionStatusHeaders;
    request: Map<string, any>;
}
export declare class GetNamespaceDeletionStatusResponse extends SpeakeasyBase {
    contentType: string;
    getNamespaceDeletionStatusResponse?: shared.GetNamespaceDeletionStatusResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
}
