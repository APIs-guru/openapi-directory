import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileActionMovePathParams extends SpeakeasyBase {
    path: string;
}
export declare class FileActionMoveRequestBody extends SpeakeasyBase {
    destination: string;
}
export declare class FileActionMoveRequest extends SpeakeasyBase {
    pathParams: FileActionMovePathParams;
    request: FileActionMoveRequestBody;
}
export declare class FileActionMoveResponse extends SpeakeasyBase {
    contentType: string;
    fileActionEntity?: shared.FileActionEntity;
    statusCode: number;
}
