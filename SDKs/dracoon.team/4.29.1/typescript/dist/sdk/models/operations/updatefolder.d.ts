import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFolderPathParams extends SpeakeasyBase {
    folderId: number;
}
export declare class UpdateFolderHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateFolderRequest extends SpeakeasyBase {
    pathParams: UpdateFolderPathParams;
    headers: UpdateFolderHeaders;
    request: shared.UpdateFolderRequest;
}
export declare class UpdateFolderResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
}
