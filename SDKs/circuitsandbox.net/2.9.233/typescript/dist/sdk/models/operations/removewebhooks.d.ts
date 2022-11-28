import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveWebHooksSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class RemoveWebHooksRequest extends SpeakeasyBase {
    security: RemoveWebHooksSecurity;
}
export declare class RemoveWebHooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
