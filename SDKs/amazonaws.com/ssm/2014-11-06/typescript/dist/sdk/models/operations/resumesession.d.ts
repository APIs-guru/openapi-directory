import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResumeSessionXAmzTargetEnum {
    AmazonSsmResumeSession = "AmazonSSM.ResumeSession"
}
export declare class ResumeSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResumeSessionXAmzTargetEnum;
}
export declare class ResumeSessionRequest extends SpeakeasyBase {
    headers: ResumeSessionHeaders;
    request: shared.ResumeSessionRequest;
}
export declare class ResumeSessionResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    internalServerError?: any;
    resumeSessionResponse?: shared.ResumeSessionResponse;
    statusCode: number;
}
