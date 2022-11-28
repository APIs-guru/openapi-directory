import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDefaultPatchBaselineXAmzTargetEnum {
    AmazonSsmGetDefaultPatchBaseline = "AmazonSSM.GetDefaultPatchBaseline"
}
export declare class GetDefaultPatchBaselineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDefaultPatchBaselineXAmzTargetEnum;
}
export declare class GetDefaultPatchBaselineRequest extends SpeakeasyBase {
    headers: GetDefaultPatchBaselineHeaders;
    request: shared.GetDefaultPatchBaselineRequest;
}
export declare class GetDefaultPatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    getDefaultPatchBaselineResult?: shared.GetDefaultPatchBaselineResult;
    internalServerError?: any;
    statusCode: number;
}
