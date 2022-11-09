import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchProjectSoftwarepackageQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchProjectSoftwarepackageCapabilities?: string;
    searchProjectSoftwarepackageDomain?: string;
    searchProjectSoftwarepackageLicense?: string;
    searchProjectSoftwarepackagePlatform?: string;
    searchProjectSoftwarepackageSoftwareType?: string;
    searchProjectSoftwarepackageSoftwareUse?: string;
    searchProjectSoftwarepackageStatus?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectSoftwarepackageRequest extends SpeakeasyBase {
    queryParams: SearchProjectSoftwarepackageQueryParams;
}
export declare class SearchProjectSoftwarepackageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
