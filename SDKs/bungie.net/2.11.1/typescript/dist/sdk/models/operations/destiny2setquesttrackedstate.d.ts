import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Destiny2SetQuestTrackedStateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class Destiny2SetQuestTrackedStateRequest extends SpeakeasyBase {
    security: Destiny2SetQuestTrackedStateSecurity;
}
export declare class Destiny2SetQuestTrackedStateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
