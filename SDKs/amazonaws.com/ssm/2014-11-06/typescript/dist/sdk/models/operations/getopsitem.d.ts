import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetOpsItemXAmzTargetEnum {
    AmazonSsmGetOpsItem = "AmazonSSM.GetOpsItem"
}
export declare class GetOpsItemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOpsItemXAmzTargetEnum;
}
export declare class GetOpsItemRequest extends SpeakeasyBase {
    headers: GetOpsItemHeaders;
    request: shared.GetOpsItemRequest;
}
export declare class GetOpsItemResponse extends SpeakeasyBase {
    contentType: string;
    getOpsItemResponse?: shared.GetOpsItemResponse;
    internalServerError?: any;
    opsItemNotFoundException?: any;
    statusCode: number;
}
