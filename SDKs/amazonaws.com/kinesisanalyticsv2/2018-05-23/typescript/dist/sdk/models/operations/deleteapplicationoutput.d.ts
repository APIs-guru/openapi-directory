import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteApplicationOutputXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationOutput = "KinesisAnalytics_20180523.DeleteApplicationOutput"
}
export declare class DeleteApplicationOutputHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationOutputXAmzTargetEnum;
}
export declare class DeleteApplicationOutputRequest extends SpeakeasyBase {
    headers: DeleteApplicationOutputHeaders;
    request: shared.DeleteApplicationOutputRequest;
}
export declare class DeleteApplicationOutputResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteApplicationOutputResponse?: shared.DeleteApplicationOutputResponse;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
