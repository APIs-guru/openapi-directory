import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVideoDescPathParams extends SpeakeasyBase {
    id: any;
}
export declare class GetVideoDescRequest extends SpeakeasyBase {
    pathParams: GetVideoDescPathParams;
}
export declare class GetVideoDescResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVideoDesc200ApplicationJsonString?: string;
}
