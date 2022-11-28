import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostFilesPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class PostFilesPathRequestBody extends SpeakeasyBase {
    action?: string;
    etagsEtag: string[];
    etagsPart: number[];
    length?: number;
    mkdirParents?: boolean;
    part?: number;
    parts?: number;
    providedMtime?: Date;
    ref?: string;
    restart?: number;
    size?: number;
    structure?: string;
    withRename?: boolean;
}
export declare class PostFilesPathRequest extends SpeakeasyBase {
    pathParams: PostFilesPathPathParams;
    request?: PostFilesPathRequestBody;
}
export declare class PostFilesPathResponse extends SpeakeasyBase {
    contentType: string;
    fileEntity?: shared.FileEntity;
    statusCode: number;
}
