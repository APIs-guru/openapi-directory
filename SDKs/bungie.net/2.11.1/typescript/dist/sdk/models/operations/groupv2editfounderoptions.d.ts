import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupV2EditFounderOptionsPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2EditFounderOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2EditFounderOptionsRequest extends SpeakeasyBase {
    pathParams: GroupV2EditFounderOptionsPathParams;
    security: GroupV2EditFounderOptionsSecurity;
}
export declare class GroupV2EditFounderOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
