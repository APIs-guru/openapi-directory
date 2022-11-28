import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkTypeApiDetailsQueryParams extends SpeakeasyBase {
    workTypeId: number;
}
export declare class WorkTypeApiDetailsHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiDetailsRequest extends SpeakeasyBase {
    queryParams: WorkTypeApiDetailsQueryParams;
    headers: WorkTypeApiDetailsHeaders;
}
export declare class WorkTypeApiDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    workTypeDetailsApiModel?: shared.WorkTypeDetailsApiModel;
}
