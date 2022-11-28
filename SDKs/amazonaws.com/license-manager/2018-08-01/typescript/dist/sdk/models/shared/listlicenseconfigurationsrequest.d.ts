import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListLicenseConfigurationsRequest extends SpeakeasyBase {
    filters?: Filter[];
    licenseConfigurationArns?: string[];
    maxResults?: number;
    nextToken?: string;
}
