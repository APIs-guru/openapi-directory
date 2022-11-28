import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelClusterXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCancelCluster = "AWSIESnowballJobManagementService.CancelCluster"
}
export declare class CancelClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelClusterXAmzTargetEnum;
}
export declare class CancelClusterRequest extends SpeakeasyBase {
    headers: CancelClusterHeaders;
    request: shared.CancelClusterRequest;
}
export declare class CancelClusterResponse extends SpeakeasyBase {
    cancelClusterResult?: Map<string, any>;
    contentType: string;
    invalidJobStateException?: any;
    invalidResourceException?: any;
    kmsRequestFailedException?: any;
    statusCode: number;
}
