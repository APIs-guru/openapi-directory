import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetStatePathParams extends SpeakeasyBase {
    agentNum: number;
    object: string;
    state: number;
}
export declare class SetStateRequest extends SpeakeasyBase {
    pathParams: SetStatePathParams;
}
export declare class SetStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setState200ApplicationJsonString?: string;
}
