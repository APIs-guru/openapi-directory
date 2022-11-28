import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartQueryXAmzTargetEnum {
    Logs20140328StartQuery = "Logs_20140328.StartQuery"
}
export declare class StartQueryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartQueryXAmzTargetEnum;
}
export declare class StartQueryRequest extends SpeakeasyBase {
    headers: StartQueryHeaders;
    request: shared.StartQueryRequest;
}
export declare class StartQueryResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    limitExceededException?: any;
    malformedQueryException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    startQueryResponse?: shared.StartQueryResponse;
    statusCode: number;
}
