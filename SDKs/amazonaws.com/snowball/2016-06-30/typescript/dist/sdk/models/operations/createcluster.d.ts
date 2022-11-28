import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateClusterXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCreateCluster = "AWSIESnowballJobManagementService.CreateCluster"
}
export declare class CreateClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateClusterXAmzTargetEnum;
}
export declare class CreateClusterRequest extends SpeakeasyBase {
    headers: CreateClusterHeaders;
    request: shared.CreateClusterRequest;
}
export declare class CreateClusterResponse extends SpeakeasyBase {
    contentType: string;
    createClusterResult?: shared.CreateClusterResult;
    ec2RequestFailedException?: any;
    invalidInputCombinationException?: any;
    invalidResourceException?: any;
    kmsRequestFailedException?: any;
    statusCode: number;
}
