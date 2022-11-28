import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTableXAmzTargetEnum {
    Timestream20181101DeleteTable = "Timestream_20181101.DeleteTable"
}
export declare class DeleteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTableXAmzTargetEnum;
}
export declare class DeleteTableRequest extends SpeakeasyBase {
    headers: DeleteTableHeaders;
    request: shared.DeleteTableRequest;
}
export declare class DeleteTableResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    invalidEndpointException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
