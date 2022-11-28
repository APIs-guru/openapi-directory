import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVolumesFsNameJsonPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetVolumesFsNameJsonHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetVolumesFsNameJsonRequest extends SpeakeasyBase {
    pathParams: GetVolumesFsNameJsonPathParams;
    headers: GetVolumesFsNameJsonHeaders;
}
export declare class GetVolumesFsNameJsonResponse extends SpeakeasyBase {
    contentType: string;
    getFileshareDetails?: shared.GetFileshareDetails[];
    statusCode: number;
}
