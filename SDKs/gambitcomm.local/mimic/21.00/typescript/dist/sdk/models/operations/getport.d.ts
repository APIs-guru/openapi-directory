import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPortPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetPortRequest extends SpeakeasyBase {
    pathParams: GetPortPathParams;
}
export declare class GetPortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPort200ApplicationJsonString?: string;
}
