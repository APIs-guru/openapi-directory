import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateOutpostHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateOutpostRequestBody extends SpeakeasyBase {
    availabilityZone?: string;
    availabilityZoneId?: string;
    description?: string;
    name: string;
    siteId: string;
    tags?: Map<string, string>;
}
export declare class CreateOutpostRequest extends SpeakeasyBase {
    headers: CreateOutpostHeaders;
    request: CreateOutpostRequestBody;
}
export declare class CreateOutpostResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createOutpostOutput?: shared.CreateOutpostOutput;
    internalServerException?: any;
    notFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
