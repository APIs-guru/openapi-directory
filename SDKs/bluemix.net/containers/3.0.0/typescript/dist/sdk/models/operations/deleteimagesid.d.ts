import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteImagesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteImagesIdHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class DeleteImagesIdRequest extends SpeakeasyBase {
    pathParams: DeleteImagesIdPathParams;
    headers: DeleteImagesIdHeaders;
}
export declare class DeleteImagesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
