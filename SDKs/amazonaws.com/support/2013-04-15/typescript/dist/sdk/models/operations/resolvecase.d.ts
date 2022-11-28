import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResolveCaseXAmzTargetEnum {
    AwsSupport20130415ResolveCase = "AWSSupport_20130415.ResolveCase"
}
export declare class ResolveCaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResolveCaseXAmzTargetEnum;
}
export declare class ResolveCaseRequest extends SpeakeasyBase {
    headers: ResolveCaseHeaders;
    request: shared.ResolveCaseRequest;
}
export declare class ResolveCaseResponse extends SpeakeasyBase {
    caseIdNotFound?: any;
    contentType: string;
    internalServerError?: any;
    resolveCaseResponse?: shared.ResolveCaseResponse;
    statusCode: number;
}
