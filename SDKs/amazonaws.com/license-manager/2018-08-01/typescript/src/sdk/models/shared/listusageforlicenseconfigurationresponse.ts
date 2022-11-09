import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LicenseConfigurationUsage } from "./licenseconfigurationusage";


export class ListUsageForLicenseConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseConfigurationUsageList", elemType: shared.LicenseConfigurationUsage })
  licenseConfigurationUsageList?: LicenseConfigurationUsage[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
