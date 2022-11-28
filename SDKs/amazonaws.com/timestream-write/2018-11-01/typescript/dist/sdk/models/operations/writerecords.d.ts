import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum WriteRecordsXAmzTargetEnum {
    Timestream20181101WriteRecords = "Timestream_20181101.WriteRecords"
}
export declare class WriteRecordsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: WriteRecordsXAmzTargetEnum;
}
export declare class WriteRecordsRequest extends SpeakeasyBase {
    headers: WriteRecordsHeaders;
    request: shared.WriteRecordsRequest;
}
export declare class WriteRecordsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    invalidEndpointException?: any;
    rejectedRecordsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
