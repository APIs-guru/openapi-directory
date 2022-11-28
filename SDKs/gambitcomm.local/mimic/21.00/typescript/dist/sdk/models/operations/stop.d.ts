import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class StopRequest extends SpeakeasyBase {
    pathParams: StopPathParams;
}
export declare class StopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stop200ApplicationJsonString?: string;
}
