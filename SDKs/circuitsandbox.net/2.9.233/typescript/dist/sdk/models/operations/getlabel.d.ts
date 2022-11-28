import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLabelSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetLabelRequest extends SpeakeasyBase {
    security: GetLabelSecurity;
}
export declare class GetLabelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
