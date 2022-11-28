import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddCommunicationToCaseXAmzTargetEnum {
    AwsSupport20130415AddCommunicationToCase = "AWSSupport_20130415.AddCommunicationToCase"
}
export declare class AddCommunicationToCaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddCommunicationToCaseXAmzTargetEnum;
}
export declare class AddCommunicationToCaseRequest extends SpeakeasyBase {
    headers: AddCommunicationToCaseHeaders;
    request: shared.AddCommunicationToCaseRequest;
}
export declare class AddCommunicationToCaseResponse extends SpeakeasyBase {
    addCommunicationToCaseResponse?: shared.AddCommunicationToCaseResponse;
    attachmentSetExpired?: any;
    attachmentSetIdNotFound?: any;
    caseIdNotFound?: any;
    contentType: string;
    internalServerError?: any;
    statusCode: number;
}
