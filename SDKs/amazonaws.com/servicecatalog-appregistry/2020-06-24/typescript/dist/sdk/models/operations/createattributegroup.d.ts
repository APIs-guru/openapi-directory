import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAttributeGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAttributeGroupRequestBody extends SpeakeasyBase {
    attributes: string;
    clientToken: string;
    description?: string;
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateAttributeGroupRequest extends SpeakeasyBase {
    headers: CreateAttributeGroupHeaders;
    request: CreateAttributeGroupRequestBody;
}
export declare class CreateAttributeGroupResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createAttributeGroupResponse?: shared.CreateAttributeGroupResponse;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
