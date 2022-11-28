import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetStarttimePathParams extends SpeakeasyBase {
    agentNum: number;
    start: number;
}
export declare class SetStarttimeRequest extends SpeakeasyBase {
    pathParams: SetStarttimePathParams;
}
export declare class SetStarttimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setStarttime200ApplicationJsonString?: string;
}
