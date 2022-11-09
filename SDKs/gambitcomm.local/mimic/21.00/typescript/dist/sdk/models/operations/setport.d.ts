import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SetPortPathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
}
export declare class SetPortRequest extends SpeakeasyBase {
    pathParams: SetPortPathParams;
}
export declare class SetPortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setPort200ApplicationJsonString?: string;
}
