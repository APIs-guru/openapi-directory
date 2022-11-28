import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBinIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBinIdRequest extends SpeakeasyBase {
    pathParams: GetBinIdPathParams;
}
export declare class GetBinIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    getBinId200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
