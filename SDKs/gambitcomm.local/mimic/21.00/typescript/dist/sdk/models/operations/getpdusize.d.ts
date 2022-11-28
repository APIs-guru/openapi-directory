import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPdusizePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetPdusizeRequest extends SpeakeasyBase {
    pathParams: GetPdusizePathParams;
}
export declare class GetPdusizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPdusize200ApplicationJsonInt32Integer?: number;
}
