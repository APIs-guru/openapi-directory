import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTableXAmzTargetEnum {
    Timestream20181101UpdateTable = "Timestream_20181101.UpdateTable"
}
export declare class UpdateTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTableXAmzTargetEnum;
}
export declare class UpdateTableRequest extends SpeakeasyBase {
    headers: UpdateTableHeaders;
    request: shared.UpdateTableRequest;
}
export declare class UpdateTableResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    invalidEndpointException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateTableResponse?: shared.UpdateTableResponse;
    validationException?: any;
}
