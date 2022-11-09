import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ZebraGetQueryParams extends SpeakeasyBase {
    format: string;
    height?: number;
    showlabel?: boolean;
    value: string;
    width?: number;
}
export declare class ZebraGetSecurity extends SpeakeasyBase {
    queryApiKey: shared.SchemeQueryApiKey;
}
export declare class ZebraGetRequest extends SpeakeasyBase {
    queryParams: ZebraGetQueryParams;
    security: ZebraGetSecurity;
}
export declare class ZebraGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    zebraGet200ImagePngBinaryString?: Uint8Array;
}
