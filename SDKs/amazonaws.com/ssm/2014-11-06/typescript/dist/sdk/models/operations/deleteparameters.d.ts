import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteParametersXAmzTargetEnum {
    AmazonSsmDeleteParameters = "AmazonSSM.DeleteParameters"
}
export declare class DeleteParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteParametersXAmzTargetEnum;
}
export declare class DeleteParametersRequest extends SpeakeasyBase {
    headers: DeleteParametersHeaders;
    request: shared.DeleteParametersRequest;
}
export declare class DeleteParametersResponse extends SpeakeasyBase {
    contentType: string;
    deleteParametersResult?: shared.DeleteParametersResult;
    internalServerError?: any;
    statusCode: number;
}
