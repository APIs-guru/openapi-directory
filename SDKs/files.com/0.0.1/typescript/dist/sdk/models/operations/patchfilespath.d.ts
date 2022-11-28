import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchFilesPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class PatchFilesPathRequestBody extends SpeakeasyBase {
    priorityColor?: string;
    providedMtime?: Date;
}
export declare class PatchFilesPathRequest extends SpeakeasyBase {
    pathParams: PatchFilesPathPathParams;
    request?: PatchFilesPathRequestBody;
}
export declare class PatchFilesPathResponse extends SpeakeasyBase {
    contentType: string;
    fileEntity?: shared.FileEntity;
    statusCode: number;
}
