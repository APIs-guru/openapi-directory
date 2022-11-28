import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsListInstallationsQueryParams extends SpeakeasyBase {
    outdated?: string;
    page?: number;
    perPage?: number;
    since?: Date;
}
export declare class AppsListInstallationsRequest extends SpeakeasyBase {
    queryParams: AppsListInstallationsQueryParams;
}
export declare class AppsListInstallationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    installationGhes2s?: shared.InstallationGhes2[];
}
