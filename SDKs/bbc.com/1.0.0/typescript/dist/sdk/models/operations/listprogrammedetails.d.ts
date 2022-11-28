import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProgrammeDetailsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    partnerPid?: string;
    pid?: string;
}
export declare class ListProgrammeDetailsRequest extends SpeakeasyBase {
    queryParams: ListProgrammeDetailsQueryParams;
}
export declare class ListProgrammeDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    nitro?: any;
}
