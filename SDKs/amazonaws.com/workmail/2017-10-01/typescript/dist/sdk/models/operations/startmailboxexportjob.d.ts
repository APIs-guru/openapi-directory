import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartMailboxExportJobXAmzTargetEnum {
    WorkMailServiceStartMailboxExportJob = "WorkMailService.StartMailboxExportJob"
}
export declare class StartMailboxExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMailboxExportJobXAmzTargetEnum;
}
export declare class StartMailboxExportJobRequest extends SpeakeasyBase {
    headers: StartMailboxExportJobHeaders;
    request: shared.StartMailboxExportJobRequest;
}
export declare class StartMailboxExportJobResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    startMailboxExportJobResponse?: shared.StartMailboxExportJobResponse;
    statusCode: number;
}
