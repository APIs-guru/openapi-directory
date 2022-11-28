import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateClusterXAmzTargetEnum {
    AwsieSnowballJobManagementServiceUpdateCluster = "AWSIESnowballJobManagementService.UpdateCluster"
}
export declare class UpdateClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateClusterXAmzTargetEnum;
}
export declare class UpdateClusterRequest extends SpeakeasyBase {
    headers: UpdateClusterHeaders;
    request: shared.UpdateClusterRequest;
}
export declare class UpdateClusterResponse extends SpeakeasyBase {
    contentType: string;
    ec2RequestFailedException?: any;
    invalidInputCombinationException?: any;
    invalidJobStateException?: any;
    invalidResourceException?: any;
    kmsRequestFailedException?: any;
    statusCode: number;
    updateClusterResult?: Map<string, any>;
}
