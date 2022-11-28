import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDataSourceXAmzTargetEnum {
    AmazonMl20141212GetDataSource = "AmazonML_20141212.GetDataSource"
}
export declare class GetDataSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataSourceXAmzTargetEnum;
}
export declare class GetDataSourceRequest extends SpeakeasyBase {
    headers: GetDataSourceHeaders;
    request: shared.GetDataSourceInput;
}
export declare class GetDataSourceResponse extends SpeakeasyBase {
    contentType: string;
    getDataSourceOutput?: shared.GetDataSourceOutput;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
