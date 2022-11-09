import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStatePathParams extends SpeakeasyBase {
    agentNum: number;
    object: string;
}
export declare class GetStateRequest extends SpeakeasyBase {
    pathParams: GetStatePathParams;
}
export declare class GetStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getState200ApplicationJsonString?: string;
}
