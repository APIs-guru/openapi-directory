import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutContainersQuotaHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PutContainersQuotaRequest extends SpeakeasyBase {
    headers: PutContainersQuotaHeaders;
    request: any;
}
export declare class PutContainersQuotaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
