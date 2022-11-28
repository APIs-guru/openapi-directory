import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EaseeSessionsQueryParams extends SpeakeasyBase {
    password?: string;
    username?: string;
}
export declare class EaseeSessionsRequest extends SpeakeasyBase {
    queryParams: EaseeSessionsQueryParams;
}
export declare class EaseeSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    easeeChargers?: shared.EaseeCharger[];
}
