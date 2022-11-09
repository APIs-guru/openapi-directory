import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetOwnerPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetOwnerRequest extends SpeakeasyBase {
    pathParams: GetOwnerPathParams;
}
export declare class GetOwnerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOwner200ApplicationJsonString?: string;
}
