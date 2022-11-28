import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LockListForPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class LockListForPathQueryParams extends SpeakeasyBase {
    cursor?: string;
    includeChildren?: boolean;
    perPage?: number;
}
export declare class LockListForPathRequest extends SpeakeasyBase {
    pathParams: LockListForPathPathParams;
    queryParams: LockListForPathQueryParams;
}
export declare class LockListForPathResponse extends SpeakeasyBase {
    contentType: string;
    lockEntities?: shared.LockEntity[];
    statusCode: number;
}
