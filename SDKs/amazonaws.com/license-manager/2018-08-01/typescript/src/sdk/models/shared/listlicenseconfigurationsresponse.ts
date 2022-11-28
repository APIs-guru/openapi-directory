import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseConfiguration } from "./licenseconfiguration";



export class ListLicenseConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurations", elemType: LicenseConfiguration })
  licenseConfigurations?: LicenseConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
