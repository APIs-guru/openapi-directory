import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSimPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetSimRequest extends SpeakeasyBase {
    pathParams: GetSimPathParams;
}
export declare class GetSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSim200ApplicationJsonString?: string;
}
