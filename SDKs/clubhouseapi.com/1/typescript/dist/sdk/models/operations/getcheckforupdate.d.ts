import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCheckForUpdateQueryParams extends SpeakeasyBase {
    isTestflight?: number;
}
export declare class GetCheckForUpdateRequest extends SpeakeasyBase {
    queryParams: GetCheckForUpdateQueryParams;
}
export declare class GetCheckForUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
