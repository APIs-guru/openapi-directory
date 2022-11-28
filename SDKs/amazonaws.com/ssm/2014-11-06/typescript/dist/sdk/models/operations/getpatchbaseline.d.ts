import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPatchBaselineXAmzTargetEnum {
    AmazonSsmGetPatchBaseline = "AmazonSSM.GetPatchBaseline"
}
export declare class GetPatchBaselineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPatchBaselineXAmzTargetEnum;
}
export declare class GetPatchBaselineRequest extends SpeakeasyBase {
    headers: GetPatchBaselineHeaders;
    request: shared.GetPatchBaselineRequest;
}
export declare class GetPatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    getPatchBaselineResult?: shared.GetPatchBaselineResult;
    internalServerError?: any;
    invalidResourceId?: any;
    statusCode: number;
}
