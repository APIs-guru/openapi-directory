import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePatchBaselineXAmzTargetEnum {
    AmazonSsmDeletePatchBaseline = "AmazonSSM.DeletePatchBaseline"
}
export declare class DeletePatchBaselineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePatchBaselineXAmzTargetEnum;
}
export declare class DeletePatchBaselineRequest extends SpeakeasyBase {
    headers: DeletePatchBaselineHeaders;
    request: shared.DeletePatchBaselineRequest;
}
export declare class DeletePatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    deletePatchBaselineResult?: shared.DeletePatchBaselineResult;
    internalServerError?: any;
    resourceInUseException?: any;
    statusCode: number;
}
