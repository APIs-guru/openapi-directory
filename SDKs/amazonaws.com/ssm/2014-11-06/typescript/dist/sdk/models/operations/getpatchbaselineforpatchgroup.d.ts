import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPatchBaselineForPatchGroupXAmzTargetEnum {
    AmazonSsmGetPatchBaselineForPatchGroup = "AmazonSSM.GetPatchBaselineForPatchGroup"
}
export declare class GetPatchBaselineForPatchGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPatchBaselineForPatchGroupXAmzTargetEnum;
}
export declare class GetPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
    headers: GetPatchBaselineForPatchGroupHeaders;
    request: shared.GetPatchBaselineForPatchGroupRequest;
}
export declare class GetPatchBaselineForPatchGroupResponse extends SpeakeasyBase {
    contentType: string;
    getPatchBaselineForPatchGroupResult?: shared.GetPatchBaselineForPatchGroupResult;
    internalServerError?: any;
    statusCode: number;
}
