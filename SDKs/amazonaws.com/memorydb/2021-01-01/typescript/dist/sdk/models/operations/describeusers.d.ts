import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeUsersXAmzTargetEnum {
    AmazonMemoryDbDescribeUsers = "AmazonMemoryDB.DescribeUsers"
}
export declare class DescribeUsersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUsersXAmzTargetEnum;
}
export declare class DescribeUsersRequest extends SpeakeasyBase {
    headers: DescribeUsersHeaders;
    request: shared.DescribeUsersRequest;
}
export declare class DescribeUsersResponse extends SpeakeasyBase {
    contentType: string;
    describeUsersResponse?: shared.DescribeUsersResponse;
    invalidParameterCombinationException?: any;
    statusCode: number;
    userNotFoundFault?: any;
}
