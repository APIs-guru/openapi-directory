import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveModeratorsPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class RemoveModeratorsRequestBody extends SpeakeasyBase {
    moderators: string[];
}
export declare class RemoveModeratorsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class RemoveModeratorsRequest extends SpeakeasyBase {
    pathParams: RemoveModeratorsPathParams;
    request: RemoveModeratorsRequestBody;
    security: RemoveModeratorsSecurity;
}
export declare class RemoveModeratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
