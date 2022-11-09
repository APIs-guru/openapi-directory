import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class OptionsKeyKeyPathParams extends SpeakeasyBase {
    key: string;
}
export declare class OptionsKeyKeyRequest extends SpeakeasyBase {
    pathParams: OptionsKeyKeyPathParams;
}
export declare class OptionsKeyKeyResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
