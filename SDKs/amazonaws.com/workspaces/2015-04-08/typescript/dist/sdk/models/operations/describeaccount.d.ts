import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAccountXAmzTargetEnum {
    WorkspacesServiceDescribeAccount = "WorkspacesService.DescribeAccount"
}
export declare class DescribeAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccountXAmzTargetEnum;
}
export declare class DescribeAccountRequest extends SpeakeasyBase {
    headers: DescribeAccountHeaders;
    request: Map<string, any>;
}
export declare class DescribeAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeAccountResult?: shared.DescribeAccountResult;
    statusCode: number;
}
