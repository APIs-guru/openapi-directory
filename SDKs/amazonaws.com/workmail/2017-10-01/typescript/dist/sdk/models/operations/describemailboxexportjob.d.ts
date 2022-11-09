import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeMailboxExportJobXAmzTargetEnum {
    WorkMailServiceDescribeMailboxExportJob = "WorkMailService.DescribeMailboxExportJob"
}
export declare class DescribeMailboxExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMailboxExportJobXAmzTargetEnum;
}
export declare class DescribeMailboxExportJobRequest extends SpeakeasyBase {
    headers: DescribeMailboxExportJobHeaders;
    request: shared.DescribeMailboxExportJobRequest;
}
export declare class DescribeMailboxExportJobResponse extends SpeakeasyBase {
    contentType: string;
    describeMailboxExportJobResponse?: shared.DescribeMailboxExportJobResponse;
    entityNotFoundException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
