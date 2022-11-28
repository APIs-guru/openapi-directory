import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MePutMePreferencesRequests extends SpeakeasyBase {
    api2ModelsPreference?: shared.Api2ModelsPreference;
    api2ModelsPreference1?: shared.Api2ModelsPreference;
    api2ModelsPreference2?: shared.Api2ModelsPreference;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class MePutMePreferencesRequest extends SpeakeasyBase {
    request: MePutMePreferencesRequests;
}
export declare class MePutMePreferencesResponse extends SpeakeasyBase {
    api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
