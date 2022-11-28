import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListUsageForLicenseConfigurationRequest extends SpeakeasyBase {
    filters?: Filter[];
    licenseConfigurationArn: string;
    maxResults?: number;
    nextToken?: string;
}
