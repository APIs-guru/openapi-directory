import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterPatchBaselineForPatchGroupXAmzTargetEnum {
    AmazonSsmRegisterPatchBaselineForPatchGroup = "AmazonSSM.RegisterPatchBaselineForPatchGroup"
}
export declare class RegisterPatchBaselineForPatchGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterPatchBaselineForPatchGroupXAmzTargetEnum;
}
export declare class RegisterPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
    headers: RegisterPatchBaselineForPatchGroupHeaders;
    request: shared.RegisterPatchBaselineForPatchGroupRequest;
}
export declare class RegisterPatchBaselineForPatchGroupResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    doesNotExistException?: any;
    internalServerError?: any;
    invalidResourceId?: any;
    registerPatchBaselineForPatchGroupResult?: shared.RegisterPatchBaselineForPatchGroupResult;
    resourceLimitExceededException?: any;
    statusCode: number;
}
