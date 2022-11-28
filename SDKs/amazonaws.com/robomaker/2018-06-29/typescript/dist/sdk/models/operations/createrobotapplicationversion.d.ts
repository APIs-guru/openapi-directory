import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRobotApplicationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRobotApplicationVersionRequestBody extends SpeakeasyBase {
    application: string;
    currentRevisionId?: string;
    imageDigest?: string;
    s3Etags?: string[];
}
export declare class CreateRobotApplicationVersionRequest extends SpeakeasyBase {
    headers: CreateRobotApplicationVersionHeaders;
    request: CreateRobotApplicationVersionRequestBody;
}
export declare class CreateRobotApplicationVersionResponse extends SpeakeasyBase {
    contentType: string;
    createRobotApplicationVersionResponse?: shared.CreateRobotApplicationVersionResponse;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
