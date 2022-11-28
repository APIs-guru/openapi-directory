import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDataSourceXAmzTargetEnum {
    AmazonMl20141212DeleteDataSource = "AmazonML_20141212.DeleteDataSource"
}
export declare class DeleteDataSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDataSourceXAmzTargetEnum;
}
export declare class DeleteDataSourceRequest extends SpeakeasyBase {
    headers: DeleteDataSourceHeaders;
    request: shared.DeleteDataSourceInput;
}
export declare class DeleteDataSourceResponse extends SpeakeasyBase {
    contentType: string;
    deleteDataSourceOutput?: shared.DeleteDataSourceOutput;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
