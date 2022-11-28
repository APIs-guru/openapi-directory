import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAccountModificationsXAmzTargetEnum {
    WorkspacesServiceDescribeAccountModifications = "WorkspacesService.DescribeAccountModifications"
}
export declare class DescribeAccountModificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccountModificationsXAmzTargetEnum;
}
export declare class DescribeAccountModificationsRequest extends SpeakeasyBase {
    headers: DescribeAccountModificationsHeaders;
    request: shared.DescribeAccountModificationsRequest;
}
export declare class DescribeAccountModificationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeAccountModificationsResult?: shared.DescribeAccountModificationsResult;
    statusCode: number;
}
