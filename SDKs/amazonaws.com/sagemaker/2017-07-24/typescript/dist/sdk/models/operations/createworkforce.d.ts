import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateWorkforceXAmzTargetEnum {
    SageMakerCreateWorkforce = "SageMaker.CreateWorkforce"
}
export declare class CreateWorkforceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkforceXAmzTargetEnum;
}
export declare class CreateWorkforceRequest extends SpeakeasyBase {
    headers: CreateWorkforceHeaders;
    request: shared.CreateWorkforceRequest;
}
export declare class CreateWorkforceResponse extends SpeakeasyBase {
    contentType: string;
    createWorkforceResponse?: shared.CreateWorkforceResponse;
    statusCode: number;
}
