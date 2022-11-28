import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePatchBaselineXAmzTargetEnum {
    AmazonSsmUpdatePatchBaseline = "AmazonSSM.UpdatePatchBaseline"
}
export declare class UpdatePatchBaselineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePatchBaselineXAmzTargetEnum;
}
export declare class UpdatePatchBaselineRequest extends SpeakeasyBase {
    headers: UpdatePatchBaselineHeaders;
    request: shared.UpdatePatchBaselineRequest;
}
export declare class UpdatePatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
    updatePatchBaselineResult?: shared.UpdatePatchBaselineResult;
}
