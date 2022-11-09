import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInterfacePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetInterfaceRequest extends SpeakeasyBase {
    pathParams: GetInterfacePathParams;
}
export declare class GetInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getInterface200ApplicationJsonString?: string;
}
