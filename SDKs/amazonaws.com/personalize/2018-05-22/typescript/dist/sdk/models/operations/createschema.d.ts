import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateSchemaXAmzTargetEnum {
    AmazonPersonalizeCreateSchema = "AmazonPersonalize.CreateSchema"
}
export declare class CreateSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSchemaXAmzTargetEnum;
}
export declare class CreateSchemaRequest extends SpeakeasyBase {
    headers: CreateSchemaHeaders;
    request: shared.CreateSchemaRequest;
}
export declare class CreateSchemaResponse extends SpeakeasyBase {
    contentType: string;
    createSchemaResponse?: shared.CreateSchemaResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
}
