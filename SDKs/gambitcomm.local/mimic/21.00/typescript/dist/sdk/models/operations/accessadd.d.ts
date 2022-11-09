import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AccessAddPathParams extends SpeakeasyBase {
    agents: string;
    mask: string;
    user: string;
}
export declare class AccessAddRequest extends SpeakeasyBase {
    pathParams: AccessAddPathParams;
}
export declare class AccessAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accessAdd200ApplicationJsonString?: string;
}
