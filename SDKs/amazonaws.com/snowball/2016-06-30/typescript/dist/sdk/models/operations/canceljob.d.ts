import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelJobXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCancelJob = "AWSIESnowballJobManagementService.CancelJob"
}
export declare class CancelJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelJobXAmzTargetEnum;
}
export declare class CancelJobRequest extends SpeakeasyBase {
    headers: CancelJobHeaders;
    request: shared.CancelJobRequest;
}
export declare class CancelJobResponse extends SpeakeasyBase {
    cancelJobResult?: Map<string, any>;
    contentType: string;
    invalidJobStateException?: any;
    invalidResourceException?: any;
    kmsRequestFailedException?: any;
    statusCode: number;
}
