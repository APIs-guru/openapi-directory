import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetHostPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetHostRequest extends SpeakeasyBase {
    pathParams: GetHostPathParams;
}
export declare class GetHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getHost200ApplicationJsonString?: string;
}
