import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContactsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
}
export declare class GetContactsRequest extends SpeakeasyBase {
    queryParams: GetContactsQueryParams;
}
export declare class GetContactsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studentContactsResponse?: shared.StudentContactsResponse;
}
