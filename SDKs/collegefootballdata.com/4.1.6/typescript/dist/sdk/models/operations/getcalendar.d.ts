import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCalendarQueryParams extends SpeakeasyBase {
    year: number;
}
export declare class GetCalendarRequest extends SpeakeasyBase {
    queryParams: GetCalendarQueryParams;
}
export declare class GetCalendarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    weeks?: shared.Week[];
}
