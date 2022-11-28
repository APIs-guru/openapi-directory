import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseConfigurationUsage } from "./licenseconfigurationusage";



export class ListUsageForLicenseConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurationUsageList", elemType: LicenseConfigurationUsage })
  licenseConfigurationUsageList?: LicenseConfigurationUsage[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
