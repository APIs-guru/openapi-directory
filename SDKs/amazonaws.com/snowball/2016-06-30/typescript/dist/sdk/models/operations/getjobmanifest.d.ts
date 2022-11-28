import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetJobManifestXAmzTargetEnum {
    AwsieSnowballJobManagementServiceGetJobManifest = "AWSIESnowballJobManagementService.GetJobManifest"
}
export declare class GetJobManifestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobManifestXAmzTargetEnum;
}
export declare class GetJobManifestRequest extends SpeakeasyBase {
    headers: GetJobManifestHeaders;
    request: shared.GetJobManifestRequest;
}
export declare class GetJobManifestResponse extends SpeakeasyBase {
    contentType: string;
    getJobManifestResult?: shared.GetJobManifestResult;
    invalidJobStateException?: any;
    invalidResourceException?: any;
    statusCode: number;
}
