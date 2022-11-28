import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabaseMetricDataXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseMetricData = "Lightsail_20161128.GetRelationalDatabaseMetricData"
}
export declare class GetRelationalDatabaseMetricDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseMetricDataXAmzTargetEnum;
}
export declare class GetRelationalDatabaseMetricDataRequest extends SpeakeasyBase {
    headers: GetRelationalDatabaseMetricDataHeaders;
    request: shared.GetRelationalDatabaseMetricDataRequest;
}
export declare class GetRelationalDatabaseMetricDataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabaseMetricDataResult?: shared.GetRelationalDatabaseMetricDataResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
