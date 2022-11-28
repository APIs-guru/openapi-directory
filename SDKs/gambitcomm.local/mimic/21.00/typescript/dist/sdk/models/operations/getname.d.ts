import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNamePathParams extends SpeakeasyBase {
    oid: string;
    agentNum: number;
}
export declare class GetNameRequest extends SpeakeasyBase {
    pathParams: GetNamePathParams;
}
export declare class GetNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getName200ApplicationJsonString?: string;
}
