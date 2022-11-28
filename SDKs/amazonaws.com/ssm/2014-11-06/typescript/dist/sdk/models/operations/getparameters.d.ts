import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetParametersXAmzTargetEnum {
    AmazonSsmGetParameters = "AmazonSSM.GetParameters"
}
export declare class GetParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetParametersXAmzTargetEnum;
}
export declare class GetParametersRequest extends SpeakeasyBase {
    headers: GetParametersHeaders;
    request: shared.GetParametersRequest;
}
export declare class GetParametersResponse extends SpeakeasyBase {
    contentType: string;
    getParametersResult?: shared.GetParametersResult;
    internalServerError?: any;
    invalidKeyId?: any;
    statusCode: number;
}
