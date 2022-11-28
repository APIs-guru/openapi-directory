import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetLogRequest extends SpeakeasyBase {
    request: string;
}
export declare class SetLogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setLog200ApplicationJsonString?: string;
}
