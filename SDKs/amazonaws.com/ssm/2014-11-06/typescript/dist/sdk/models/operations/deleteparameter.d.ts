import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteParameterXAmzTargetEnum {
    AmazonSsmDeleteParameter = "AmazonSSM.DeleteParameter"
}
export declare class DeleteParameterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteParameterXAmzTargetEnum;
}
export declare class DeleteParameterRequest extends SpeakeasyBase {
    headers: DeleteParameterHeaders;
    request: shared.DeleteParameterRequest;
}
export declare class DeleteParameterResponse extends SpeakeasyBase {
    contentType: string;
    deleteParameterResult?: Map<string, any>;
    internalServerError?: any;
    parameterNotFound?: any;
    statusCode: number;
}
