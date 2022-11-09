import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteVolumesNamePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DeleteVolumesNameHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class DeleteVolumesNameRequest extends SpeakeasyBase {
    pathParams: DeleteVolumesNamePathParams;
    headers: DeleteVolumesNameHeaders;
}
export declare class DeleteVolumesNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
