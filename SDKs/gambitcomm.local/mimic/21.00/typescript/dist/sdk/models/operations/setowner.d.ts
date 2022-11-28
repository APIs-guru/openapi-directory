import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetOwnerPathParams extends SpeakeasyBase {
    agentNum: number;
    owner: string;
}
export declare class SetOwnerRequest extends SpeakeasyBase {
    pathParams: SetOwnerPathParams;
}
export declare class SetOwnerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setOwner200ApplicationJsonString?: string;
}
