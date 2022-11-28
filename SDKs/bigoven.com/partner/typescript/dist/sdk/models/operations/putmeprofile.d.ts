import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMeProfileRequests extends SpeakeasyBase {
    api2ModelsProfile?: shared.Api2ModelsProfile;
    api2ModelsProfile1?: shared.Api2ModelsProfile;
    api2ModelsProfile2?: shared.Api2ModelsProfile;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class PutMeProfileRequest extends SpeakeasyBase {
    request: PutMeProfileRequests;
}
export declare class PutMeProfileResponse extends SpeakeasyBase {
    api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
