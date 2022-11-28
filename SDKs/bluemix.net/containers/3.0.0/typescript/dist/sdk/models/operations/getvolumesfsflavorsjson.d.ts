import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVolumesFsFlavorsJsonHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetVolumesFsFlavorsJsonRequest extends SpeakeasyBase {
    headers: GetVolumesFsFlavorsJsonHeaders;
}
export declare class GetVolumesFsFlavorsJsonResponse extends SpeakeasyBase {
    contentType: string;
    getVolumesFsFlavorsJson200ApplicationJsonIntegers?: number[];
    statusCode: number;
}
