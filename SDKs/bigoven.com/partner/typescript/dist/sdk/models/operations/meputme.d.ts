import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MePutMeRequests extends SpeakeasyBase {
    api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;
    api2ModelsBigOvenUser1?: shared.Api2ModelsBigOvenUser;
    api2ModelsBigOvenUser2?: shared.Api2ModelsBigOvenUser;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class MePutMeRequest extends SpeakeasyBase {
    request: MePutMeRequests;
}
export declare class MePutMeResponse extends SpeakeasyBase {
    api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
