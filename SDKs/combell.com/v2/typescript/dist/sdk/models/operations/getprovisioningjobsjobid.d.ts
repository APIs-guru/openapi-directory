import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProvisioningjobsJobIdPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetProvisioningjobsJobIdQueryParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetProvisioningjobsJobIdRequest extends SpeakeasyBase {
    pathParams: GetProvisioningjobsJobIdPathParams;
    queryParams: GetProvisioningjobsJobIdQueryParams;
}
export declare class GetProvisioningjobsJobIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    provisioningJobCompletion?: shared.ProvisioningJobCompletion;
    provisioningJobInfo?: shared.ProvisioningJobInfo;
    statusCode: number;
}
