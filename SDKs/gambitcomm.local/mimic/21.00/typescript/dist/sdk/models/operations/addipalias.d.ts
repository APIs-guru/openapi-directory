import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AddIpaliasPathParams extends SpeakeasyBase {
    ip: string;
    agentNum: number;
    interface: string;
    mask: string;
    port: number;
}
export declare class AddIpaliasRequest extends SpeakeasyBase {
    pathParams: AddIpaliasPathParams;
}
export declare class AddIpaliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addIpalias200ApplicationJsonString?: string;
}
