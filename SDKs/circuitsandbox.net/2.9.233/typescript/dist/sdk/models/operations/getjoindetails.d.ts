import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJoinDetailsPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class GetJoinDetailsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetJoinDetailsRequest extends SpeakeasyBase {
    pathParams: GetJoinDetailsPathParams;
    security: GetJoinDetailsSecurity;
}
export declare class GetJoinDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationDetails?: any;
    statusCode: number;
}
