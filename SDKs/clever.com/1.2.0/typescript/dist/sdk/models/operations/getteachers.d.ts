import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeachersQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetTeachersRequest extends SpeakeasyBase {
    queryParams: GetTeachersQueryParams;
}
export declare class GetTeachersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teachersResponse?: shared.TeachersResponse;
}
