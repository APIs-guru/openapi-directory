import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCaseXAmzTargetEnum {
    AwsSupport20130415CreateCase = "AWSSupport_20130415.CreateCase"
}
export declare class CreateCaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCaseXAmzTargetEnum;
}
export declare class CreateCaseRequest extends SpeakeasyBase {
    headers: CreateCaseHeaders;
    request: shared.CreateCaseRequest;
}
export declare class CreateCaseResponse extends SpeakeasyBase {
    attachmentSetExpired?: any;
    attachmentSetIdNotFound?: any;
    caseCreationLimitExceeded?: any;
    contentType: string;
    createCaseResponse?: shared.CreateCaseResponse;
    internalServerError?: any;
    statusCode: number;
}
