import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveLabelPathParams extends SpeakeasyBase {
    labelId: string;
}
export declare class RemoveLabelSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class RemoveLabelRequest extends SpeakeasyBase {
    pathParams: RemoveLabelPathParams;
    security: RemoveLabelSecurity;
}
export declare class RemoveLabelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    label?: any;
    statusCode: number;
}
