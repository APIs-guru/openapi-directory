import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJoinDetailsMultipleQueryParams extends SpeakeasyBase {
    convIds: string[];
}
export declare class GetJoinDetailsMultipleSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetJoinDetailsMultipleRequest extends SpeakeasyBase {
    queryParams: GetJoinDetailsMultipleQueryParams;
    security: GetJoinDetailsMultipleSecurity;
}
export declare class GetJoinDetailsMultipleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationDetails?: any[];
    statusCode: number;
}
