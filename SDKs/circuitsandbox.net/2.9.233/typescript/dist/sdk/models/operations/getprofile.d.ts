import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetProfileRequest extends SpeakeasyBase {
    security: GetProfileSecurity;
}
export declare class GetProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
