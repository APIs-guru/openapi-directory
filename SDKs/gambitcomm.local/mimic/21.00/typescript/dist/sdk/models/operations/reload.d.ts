import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ReloadPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ReloadRequest extends SpeakeasyBase {
    pathParams: ReloadPathParams;
}
export declare class ReloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reload200ApplicationJsonString?: string;
}
