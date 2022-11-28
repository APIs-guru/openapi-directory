import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddModeratorsPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class AddModeratorsRequestBody extends SpeakeasyBase {
    moderators: string[];
}
export declare class AddModeratorsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AddModeratorsRequest extends SpeakeasyBase {
    pathParams: AddModeratorsPathParams;
    request: AddModeratorsRequestBody;
    security: AddModeratorsSecurity;
}
export declare class AddModeratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
