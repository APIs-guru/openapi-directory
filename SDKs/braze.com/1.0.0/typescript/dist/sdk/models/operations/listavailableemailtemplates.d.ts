import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListAvailableEmailTemplatesQueryParams extends SpeakeasyBase {
    limit?: string;
    modifiedAfter?: string;
    modifiedBefore?: string;
    offset?: string;
}
export declare class ListAvailableEmailTemplatesRequest extends SpeakeasyBase {
    queryParams: ListAvailableEmailTemplatesQueryParams;
}
export declare class ListAvailableEmailTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
