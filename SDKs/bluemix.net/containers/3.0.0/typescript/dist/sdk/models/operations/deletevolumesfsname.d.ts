import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteVolumesFsNamePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DeleteVolumesFsNameHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class DeleteVolumesFsNameRequest extends SpeakeasyBase {
    pathParams: DeleteVolumesFsNamePathParams;
    headers: DeleteVolumesFsNameHeaders;
}
export declare class DeleteVolumesFsNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
