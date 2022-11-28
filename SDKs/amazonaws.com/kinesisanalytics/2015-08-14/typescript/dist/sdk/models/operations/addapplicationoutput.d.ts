import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddApplicationOutputXAmzTargetEnum {
    KinesisAnalytics20150814AddApplicationOutput = "KinesisAnalytics_20150814.AddApplicationOutput"
}
export declare class AddApplicationOutputHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationOutputXAmzTargetEnum;
}
export declare class AddApplicationOutputRequest extends SpeakeasyBase {
    headers: AddApplicationOutputHeaders;
    request: shared.AddApplicationOutputRequest;
}
export declare class AddApplicationOutputResponse extends SpeakeasyBase {
    addApplicationOutputResponse?: Map<string, any>;
    concurrentModificationException?: any;
    contentType: string;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
