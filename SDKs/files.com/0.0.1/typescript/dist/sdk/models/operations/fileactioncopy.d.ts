import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileActionCopyPathParams extends SpeakeasyBase {
    path: string;
}
export declare class FileActionCopyRequestBody extends SpeakeasyBase {
    destination: string;
    structure?: boolean;
}
export declare class FileActionCopyRequest extends SpeakeasyBase {
    pathParams: FileActionCopyPathParams;
    request: FileActionCopyRequestBody;
}
export declare class FileActionCopyResponse extends SpeakeasyBase {
    contentType: string;
    fileActionEntity?: shared.FileActionEntity;
    statusCode: number;
}
