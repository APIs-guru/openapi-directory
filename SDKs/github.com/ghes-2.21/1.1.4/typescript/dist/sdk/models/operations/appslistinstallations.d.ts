import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsListInstallationsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class AppsListInstallationsHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class AppsListInstallationsRequest extends SpeakeasyBase {
    queryParams: AppsListInstallationsQueryParams;
    headers: AppsListInstallationsHeaders;
}
export declare class AppsListInstallationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    installationGhes2s?: shared.InstallationGhes2[];
}
