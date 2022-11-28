import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateWorkforceXAmzTargetEnum {
    SageMakerUpdateWorkforce = "SageMaker.UpdateWorkforce"
}
export declare class UpdateWorkforceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkforceXAmzTargetEnum;
}
export declare class UpdateWorkforceRequest extends SpeakeasyBase {
    headers: UpdateWorkforceHeaders;
    request: shared.UpdateWorkforceRequest;
}
export declare class UpdateWorkforceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateWorkforceResponse?: shared.UpdateWorkforceResponse;
}
