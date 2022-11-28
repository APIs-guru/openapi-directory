import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListClustersXAmzTargetEnum {
    AwsieSnowballJobManagementServiceListClusters = "AWSIESnowballJobManagementService.ListClusters"
}
export declare class ListClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListClustersXAmzTargetEnum;
}
export declare class ListClustersRequest extends SpeakeasyBase {
    headers: ListClustersHeaders;
    request: shared.ListClustersRequest;
}
export declare class ListClustersResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listClustersResult?: shared.ListClustersResult;
    statusCode: number;
}
