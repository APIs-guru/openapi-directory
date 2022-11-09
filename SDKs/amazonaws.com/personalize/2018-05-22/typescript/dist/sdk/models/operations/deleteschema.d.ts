import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteSchemaXAmzTargetEnum {
    AmazonPersonalizeDeleteSchema = "AmazonPersonalize.DeleteSchema"
}
export declare class DeleteSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSchemaXAmzTargetEnum;
}
export declare class DeleteSchemaRequest extends SpeakeasyBase {
    headers: DeleteSchemaHeaders;
    request: shared.DeleteSchemaRequest;
}
export declare class DeleteSchemaResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
