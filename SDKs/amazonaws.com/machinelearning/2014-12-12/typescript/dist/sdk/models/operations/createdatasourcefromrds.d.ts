import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateDataSourceFromRdsxAmzTargetEnum {
    AmazonMl20141212CreateDataSourceFromRds = "AmazonML_20141212.CreateDataSourceFromRDS"
}
export declare class CreateDataSourceFromRdsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataSourceFromRdsxAmzTargetEnum;
}
export declare class CreateDataSourceFromRdsRequest extends SpeakeasyBase {
    headers: CreateDataSourceFromRdsHeaders;
    request: shared.CreateDataSourceFromRdsInput;
}
export declare class CreateDataSourceFromRdsResponse extends SpeakeasyBase {
    contentType: string;
    createDataSourceFromRdsOutput?: shared.CreateDataSourceFromRdsOutput;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidInputException?: any;
    statusCode: number;
}
