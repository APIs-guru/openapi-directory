import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MePutMePersonalRequests extends SpeakeasyBase {
    api2ModelsPersonal?: shared.Api2ModelsPersonal;
    api2ModelsPersonal1?: shared.Api2ModelsPersonal;
    api2ModelsPersonal2?: shared.Api2ModelsPersonal;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class MePutMePersonalRequest extends SpeakeasyBase {
    request: MePutMePersonalRequests;
}
export declare class MePutMePersonalResponse extends SpeakeasyBase {
    api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
