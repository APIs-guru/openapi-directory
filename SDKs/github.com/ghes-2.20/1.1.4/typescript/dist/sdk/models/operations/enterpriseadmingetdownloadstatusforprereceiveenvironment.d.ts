import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams extends SpeakeasyBase {
    preReceiveEnvironmentId: number;
}
export declare class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams;
}
export declare class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    preReceiveEnvironmentDownloadStatus?: shared.PreReceiveEnvironmentDownloadStatus;
}
