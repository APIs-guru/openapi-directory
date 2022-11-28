import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposDownloadZipballArchivePathParams extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class ReposDownloadZipballArchiveRequest extends SpeakeasyBase {
    pathParams: ReposDownloadZipballArchivePathParams;
}
export declare class ReposDownloadZipballArchiveResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
