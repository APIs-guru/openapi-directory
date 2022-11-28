import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteWorkforceXAmzTargetEnum {
    SageMakerDeleteWorkforce = "SageMaker.DeleteWorkforce"
}
export declare class DeleteWorkforceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkforceXAmzTargetEnum;
}
export declare class DeleteWorkforceRequest extends SpeakeasyBase {
    headers: DeleteWorkforceHeaders;
    request: shared.DeleteWorkforceRequest;
}
export declare class DeleteWorkforceResponse extends SpeakeasyBase {
    contentType: string;
    deleteWorkforceResponse?: Map<string, any>;
    statusCode: number;
}
