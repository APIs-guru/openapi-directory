import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchBoulderEmailsQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbBoulderEmailsEmailSubject?: string;
    searchDbBoulderEmailsPlainTextBody?: string;
    searchDbBoulderEmailsReceivedDate?: string;
    searchDbBoulderEmailsSentCc?: string;
    searchDbBoulderEmailsSentFrom?: string;
    searchDbBoulderEmailsSentTo?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchBoulderEmailsRequest extends SpeakeasyBase {
    queryParams: SearchBoulderEmailsQueryParams;
}
export declare class SearchBoulderEmailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
