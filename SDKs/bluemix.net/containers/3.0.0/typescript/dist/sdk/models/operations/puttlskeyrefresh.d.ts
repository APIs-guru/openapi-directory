import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutTlskeyRefreshHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PutTlskeyRefreshRequest extends SpeakeasyBase {
    headers: PutTlskeyRefreshHeaders;
}
export declare class PutTlskeyRefreshResponse extends SpeakeasyBase {
    certificateRefresh?: any;
    contentType: string;
    statusCode: number;
}
