import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutAccountDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum PutAccountDetailsRequestBodyContactLanguageEnum {
    En = "EN",
    Ja = "JA"
}
export declare enum PutAccountDetailsRequestBodyMailTypeEnum {
    Marketing = "MARKETING",
    Transactional = "TRANSACTIONAL"
}
export declare class PutAccountDetailsRequestBody extends SpeakeasyBase {
    additionalContactEmailAddresses?: string[];
    contactLanguage?: PutAccountDetailsRequestBodyContactLanguageEnum;
    mailType: PutAccountDetailsRequestBodyMailTypeEnum;
    productionAccessEnabled?: boolean;
    useCaseDescription: string;
    websiteUrl: string;
}
export declare class PutAccountDetailsRequest extends SpeakeasyBase {
    headers: PutAccountDetailsHeaders;
    request: PutAccountDetailsRequestBody;
}
export declare class PutAccountDetailsResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    putAccountDetailsResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
