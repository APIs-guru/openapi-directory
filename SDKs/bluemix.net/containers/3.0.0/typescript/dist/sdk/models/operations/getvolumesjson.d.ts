import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVolumesJsonHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetVolumesJsonRequest extends SpeakeasyBase {
    headers: GetVolumesJsonHeaders;
}
export declare class GetVolumesJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumes?: any[];
}
