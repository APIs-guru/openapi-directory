import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRequestsFoldersPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class GetRequestsFoldersPathQueryParams extends SpeakeasyBase {
    cursor?: string;
    mine?: boolean;
    perPage?: number;
    sortBy?: Map<string, any>;
}
export declare class GetRequestsFoldersPathRequest extends SpeakeasyBase {
    pathParams: GetRequestsFoldersPathPathParams;
    queryParams: GetRequestsFoldersPathQueryParams;
}
export declare class GetRequestsFoldersPathResponse extends SpeakeasyBase {
    contentType: string;
    requestEntities?: shared.RequestEntity[];
    statusCode: number;
}
