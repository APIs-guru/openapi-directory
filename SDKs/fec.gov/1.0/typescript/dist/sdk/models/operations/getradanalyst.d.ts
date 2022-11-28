import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRadAnalystQueryParams extends SpeakeasyBase {
    analystId?: number[];
    analystShortId?: number[];
    apiKey: string;
    committeeId?: string[];
    email?: string[];
    maxAssignmentUpdateDate?: Date;
    minAssignmentUpdateDate?: Date;
    name?: string[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    telephoneExt?: number[];
    title?: string[];
}
export declare class GetRadAnalystRequest extends SpeakeasyBase {
    queryParams: GetRadAnalystQueryParams;
}
export declare class GetRadAnalystResponse extends SpeakeasyBase {
    contentType: string;
    radAnalystPage?: shared.RadAnalystPage;
    statusCode: number;
}
