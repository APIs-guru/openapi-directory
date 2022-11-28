import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserRequestsQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetUserRequestsRequest extends SpeakeasyBase {
    queryParams: GetUserRequestsQueryParams;
}
export declare class GetUserRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRequestEntities?: shared.UserRequestEntity[];
}
