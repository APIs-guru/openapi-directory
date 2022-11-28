import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterPatchBaselineForPatchGroupXAmzTargetEnum {
    AmazonSsmDeregisterPatchBaselineForPatchGroup = "AmazonSSM.DeregisterPatchBaselineForPatchGroup"
}
export declare class DeregisterPatchBaselineForPatchGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterPatchBaselineForPatchGroupXAmzTargetEnum;
}
export declare class DeregisterPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
    headers: DeregisterPatchBaselineForPatchGroupHeaders;
    request: shared.DeregisterPatchBaselineForPatchGroupRequest;
}
export declare class DeregisterPatchBaselineForPatchGroupResponse extends SpeakeasyBase {
    contentType: string;
    deregisterPatchBaselineForPatchGroupResult?: shared.DeregisterPatchBaselineForPatchGroupResult;
    internalServerError?: any;
    invalidResourceId?: any;
    statusCode: number;
}
