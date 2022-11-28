import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetInterfacePathParams extends SpeakeasyBase {
    agentNum: number;
    interface: string;
}
export declare class SetInterfaceRequest extends SpeakeasyBase {
    pathParams: SetInterfacePathParams;
}
export declare class SetInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setInterface200ApplicationJsonString?: string;
}
