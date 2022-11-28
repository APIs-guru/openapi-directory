import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelMailboxExportJobXAmzTargetEnum {
    WorkMailServiceCancelMailboxExportJob = "WorkMailService.CancelMailboxExportJob"
}
export declare class CancelMailboxExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelMailboxExportJobXAmzTargetEnum;
}
export declare class CancelMailboxExportJobRequest extends SpeakeasyBase {
    headers: CancelMailboxExportJobHeaders;
    request: shared.CancelMailboxExportJobRequest;
}
export declare class CancelMailboxExportJobResponse extends SpeakeasyBase {
    cancelMailboxExportJobResponse?: Map<string, any>;
    contentType: string;
    entityNotFoundException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
