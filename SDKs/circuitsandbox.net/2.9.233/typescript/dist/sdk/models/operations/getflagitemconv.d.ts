import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFlagItemConvSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetFlagItemConvRequest extends SpeakeasyBase {
    security: GetFlagItemConvSecurity;
}
export declare class GetFlagItemConvResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
