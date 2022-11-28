import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSimulationApplicationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSimulationApplicationVersionRequestBody extends SpeakeasyBase {
    application: string;
    currentRevisionId?: string;
    imageDigest?: string;
    s3Etags?: string[];
}
export declare class CreateSimulationApplicationVersionRequest extends SpeakeasyBase {
    headers: CreateSimulationApplicationVersionHeaders;
    request: CreateSimulationApplicationVersionRequestBody;
}
export declare class CreateSimulationApplicationVersionResponse extends SpeakeasyBase {
    contentType: string;
    createSimulationApplicationVersionResponse?: shared.CreateSimulationApplicationVersionResponse;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
