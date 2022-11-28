import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSlotTypeVersionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CreateSlotTypeVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSlotTypeVersionRequestBody extends SpeakeasyBase {
    checksum?: string;
}
export declare class CreateSlotTypeVersionRequest extends SpeakeasyBase {
    pathParams: CreateSlotTypeVersionPathParams;
    headers: CreateSlotTypeVersionHeaders;
    request: CreateSlotTypeVersionRequestBody;
}
export declare class CreateSlotTypeVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createSlotTypeVersionResponse?: shared.CreateSlotTypeVersionResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    preconditionFailedException?: any;
    statusCode: number;
}
