import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposDownloadTarballArchivePathParams extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class ReposDownloadTarballArchiveRequest extends SpeakeasyBase {
    pathParams: ReposDownloadTarballArchivePathParams;
}
export declare class ReposDownloadTarballArchiveResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
