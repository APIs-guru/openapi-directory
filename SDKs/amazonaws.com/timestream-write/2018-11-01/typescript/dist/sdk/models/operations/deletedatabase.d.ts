import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDatabaseXAmzTargetEnum {
    Timestream20181101DeleteDatabase = "Timestream_20181101.DeleteDatabase"
}
export declare class DeleteDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDatabaseXAmzTargetEnum;
}
export declare class DeleteDatabaseRequest extends SpeakeasyBase {
    headers: DeleteDatabaseHeaders;
    request: shared.DeleteDatabaseRequest;
}
export declare class DeleteDatabaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    invalidEndpointException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
