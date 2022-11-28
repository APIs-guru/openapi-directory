import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchStylesPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class PatchStylesPathRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PatchStylesPathRequestBody extends SpeakeasyBase {
    file: PatchStylesPathRequestBodyFile;
}
export declare class PatchStylesPathRequest extends SpeakeasyBase {
    pathParams: PatchStylesPathPathParams;
    request: PatchStylesPathRequestBody;
}
export declare class PatchStylesPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    styleEntity?: shared.StyleEntity;
}
