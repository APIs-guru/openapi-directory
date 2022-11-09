import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AddPathParams extends SpeakeasyBase {
    agentNum: number;
    instance: string;
    object: string;
}
export declare class AddRequest extends SpeakeasyBase {
    pathParams: AddPathParams;
}
export declare class AddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    add200ApplicationJsonString?: string;
}
