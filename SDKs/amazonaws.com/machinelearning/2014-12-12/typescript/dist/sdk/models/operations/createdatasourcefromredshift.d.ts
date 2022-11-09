import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateDataSourceFromRedshiftXAmzTargetEnum {
    AmazonMl20141212CreateDataSourceFromRedshift = "AmazonML_20141212.CreateDataSourceFromRedshift"
}
export declare class CreateDataSourceFromRedshiftHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataSourceFromRedshiftXAmzTargetEnum;
}
export declare class CreateDataSourceFromRedshiftRequest extends SpeakeasyBase {
    headers: CreateDataSourceFromRedshiftHeaders;
    request: shared.CreateDataSourceFromRedshiftInput;
}
export declare class CreateDataSourceFromRedshiftResponse extends SpeakeasyBase {
    contentType: string;
    createDataSourceFromRedshiftOutput?: shared.CreateDataSourceFromRedshiftOutput;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidInputException?: any;
    statusCode: number;
}
