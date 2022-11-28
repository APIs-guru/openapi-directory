import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateApplicationRequestBody extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    headers: CreateApplicationHeaders;
    request: CreateApplicationRequestBody;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createApplicationResponse?: shared.CreateApplicationResponse;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
}
