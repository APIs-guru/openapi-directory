import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetImagesNameOrIdJsonPathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class GetImagesNameOrIdJsonHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetImagesNameOrIdJsonRequest extends SpeakeasyBase {
    pathParams: GetImagesNameOrIdJsonPathParams;
    headers: GetImagesNameOrIdJsonHeaders;
}
export declare class GetImagesNameOrIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    imageDetail?: shared.ImageDetail;
    statusCode: number;
}
