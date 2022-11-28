import { SpeakeasyBase } from "../../../internal/utils";
export declare class GeneralApiDateFormatsHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class GeneralApiDateFormatsRequest extends SpeakeasyBase {
    headers: GeneralApiDateFormatsHeaders;
}
export declare class GeneralApiDateFormatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    generalApiDateFormats200ApplicationJsonStrings?: string[];
    generalApiDateFormats200TextJsonStrings?: string[];
    statusCode: number;
}
