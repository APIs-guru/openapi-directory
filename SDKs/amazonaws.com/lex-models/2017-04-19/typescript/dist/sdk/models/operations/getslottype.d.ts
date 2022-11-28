import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSlotTypePathParams extends SpeakeasyBase {
    name: string;
    version: string;
}
export declare class GetSlotTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSlotTypeRequest extends SpeakeasyBase {
    pathParams: GetSlotTypePathParams;
    headers: GetSlotTypeHeaders;
}
export declare class GetSlotTypeResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getSlotTypeResponse?: shared.GetSlotTypeResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
