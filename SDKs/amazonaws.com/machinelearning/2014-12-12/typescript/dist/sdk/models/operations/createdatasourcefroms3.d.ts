import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDataSourceFromS3XAmzTargetEnum {
    AmazonMl20141212CreateDataSourceFromS3 = "AmazonML_20141212.CreateDataSourceFromS3"
}
export declare class CreateDataSourceFromS3Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataSourceFromS3XAmzTargetEnum;
}
export declare class CreateDataSourceFromS3Request extends SpeakeasyBase {
    headers: CreateDataSourceFromS3Headers;
    request: shared.CreateDataSourceFromS3Input;
}
export declare class CreateDataSourceFromS3Response extends SpeakeasyBase {
    contentType: string;
    createDataSourceFromS3Output?: shared.CreateDataSourceFromS3Output;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidInputException?: any;
    statusCode: number;
}
