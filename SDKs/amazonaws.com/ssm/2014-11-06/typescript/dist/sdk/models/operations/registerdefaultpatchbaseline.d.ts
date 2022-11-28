import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterDefaultPatchBaselineXAmzTargetEnum {
    AmazonSsmRegisterDefaultPatchBaseline = "AmazonSSM.RegisterDefaultPatchBaseline"
}
export declare class RegisterDefaultPatchBaselineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterDefaultPatchBaselineXAmzTargetEnum;
}
export declare class RegisterDefaultPatchBaselineRequest extends SpeakeasyBase {
    headers: RegisterDefaultPatchBaselineHeaders;
    request: shared.RegisterDefaultPatchBaselineRequest;
}
export declare class RegisterDefaultPatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    internalServerError?: any;
    invalidResourceId?: any;
    registerDefaultPatchBaselineResult?: shared.RegisterDefaultPatchBaselineResult;
    statusCode: number;
}
