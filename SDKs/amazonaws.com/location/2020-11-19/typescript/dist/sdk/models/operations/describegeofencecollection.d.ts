import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeGeofenceCollectionPathParams extends SpeakeasyBase {
    collectionName: string;
}
export declare class DescribeGeofenceCollectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeGeofenceCollectionRequest extends SpeakeasyBase {
    pathParams: DescribeGeofenceCollectionPathParams;
    headers: DescribeGeofenceCollectionHeaders;
}
export declare class DescribeGeofenceCollectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeGeofenceCollectionResponse?: shared.DescribeGeofenceCollectionResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
