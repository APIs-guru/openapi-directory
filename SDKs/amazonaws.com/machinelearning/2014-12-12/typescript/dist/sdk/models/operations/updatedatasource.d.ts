import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateDataSourceXAmzTargetEnum {
    AmazonMl20141212UpdateDataSource = "AmazonML_20141212.UpdateDataSource"
}
export declare class UpdateDataSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDataSourceXAmzTargetEnum;
}
export declare class UpdateDataSourceRequest extends SpeakeasyBase {
    headers: UpdateDataSourceHeaders;
    request: shared.UpdateDataSourceInput;
}
export declare class UpdateDataSourceResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateDataSourceOutput?: shared.UpdateDataSourceOutput;
}
