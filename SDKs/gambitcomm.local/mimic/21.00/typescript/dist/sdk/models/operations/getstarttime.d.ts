import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStarttimePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetStarttimeRequest extends SpeakeasyBase {
    pathParams: GetStarttimePathParams;
}
export declare class GetStarttimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStarttime200ApplicationJsonString?: string;
}
