import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSupportInfoSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetSupportInfoRequest extends SpeakeasyBase {
    security: GetSupportInfoSecurity;
}
export declare class GetSupportInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
