import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDatasetGroupXAmzTargetEnum {
    AmazonPersonalizeDeleteDatasetGroup = "AmazonPersonalize.DeleteDatasetGroup"
}
export declare class DeleteDatasetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDatasetGroupXAmzTargetEnum;
}
export declare class DeleteDatasetGroupRequest extends SpeakeasyBase {
    headers: DeleteDatasetGroupHeaders;
    request: shared.DeleteDatasetGroupRequest;
}
export declare class DeleteDatasetGroupResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
