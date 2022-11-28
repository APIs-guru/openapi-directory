import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveWebHookPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RemoveWebHookSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class RemoveWebHookRequest extends SpeakeasyBase {
    pathParams: RemoveWebHookPathParams;
    security: RemoveWebHookSecurity;
}
export declare class RemoveWebHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
