import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnassignLabelPathParams extends SpeakeasyBase {
    convId: string;
    labelId: string;
}
export declare class UnassignLabelSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UnassignLabelRequest extends SpeakeasyBase {
    pathParams: UnassignLabelPathParams;
    security: UnassignLabelSecurity;
}
export declare class UnassignLabelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    label?: any;
    statusCode: number;
}
