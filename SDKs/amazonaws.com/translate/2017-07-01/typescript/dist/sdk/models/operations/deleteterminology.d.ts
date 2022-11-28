import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTerminologyXAmzTargetEnum {
    AwsShineFrontendService20170701DeleteTerminology = "AWSShineFrontendService_20170701.DeleteTerminology"
}
export declare class DeleteTerminologyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTerminologyXAmzTargetEnum;
}
export declare class DeleteTerminologyRequest extends SpeakeasyBase {
    headers: DeleteTerminologyHeaders;
    request: shared.DeleteTerminologyRequest;
}
export declare class DeleteTerminologyResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
