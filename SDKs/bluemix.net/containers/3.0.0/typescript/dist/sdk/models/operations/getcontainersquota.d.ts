import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetContainersQuotaHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetContainersQuotaRequest extends SpeakeasyBase {
    headers: GetContainersQuotaHeaders;
}
export declare class GetContainersQuotaResponse extends SpeakeasyBase {
    containersQuotaInfo?: any;
    contentType: string;
    statusCode: number;
}
