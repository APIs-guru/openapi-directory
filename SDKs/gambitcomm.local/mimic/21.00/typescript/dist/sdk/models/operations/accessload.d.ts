import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AccessLoadPathParams extends SpeakeasyBase {
    filename: string;
}
export declare class AccessLoadRequest extends SpeakeasyBase {
    pathParams: AccessLoadPathParams;
}
export declare class AccessLoadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accessLoad200ApplicationJsonStrings?: string[];
}
