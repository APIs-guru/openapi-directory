import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RemovePathParams extends SpeakeasyBase {
    agentNum: number;
    instance: string;
    object: string;
}
export declare class RemoveRequest extends SpeakeasyBase {
    pathParams: RemovePathParams;
}
export declare class RemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    remove200ApplicationJsonString?: string;
}
