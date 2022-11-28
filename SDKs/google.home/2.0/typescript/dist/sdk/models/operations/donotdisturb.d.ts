import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoNotDisturbHeaders extends SpeakeasyBase {
    contentType: string;
}
export declare class DoNotDisturbRequest extends SpeakeasyBase {
    headers: DoNotDisturbHeaders;
}
export declare class DoNotDisturbResponse extends SpeakeasyBase {
    contentType: string;
    getcurrentstate?: shared.Getcurrentstate;
    statusCode: number;
}
