import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddLabelRequestBody extends SpeakeasyBase {
    label: string;
}
export declare class AddLabelSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AddLabelRequest extends SpeakeasyBase {
    request: AddLabelRequestBody;
    security: AddLabelSecurity;
}
export declare class AddLabelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    label?: any;
    statusCode: number;
}
