import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVolumesNameJsonPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetVolumesNameJsonHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetVolumesNameJsonRequest extends SpeakeasyBase {
    pathParams: GetVolumesNameJsonPathParams;
    headers: GetVolumesNameJsonHeaders;
}
export declare class GetVolumesNameJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volume?: any;
}
