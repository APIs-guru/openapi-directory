import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetTopPathsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetTopPathsRequest extends SpeakeasyBase {
    pathParams: ReposGetTopPathsPathParams;
}
export declare class ReposGetTopPathsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    contentTraffics?: shared.ContentTraffic[];
}
