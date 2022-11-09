import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LicenseConfiguration } from "./licenseconfiguration";


export class ListLicenseConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseConfigurations", elemType: shared.LicenseConfiguration })
  licenseConfigurations?: LicenseConfiguration[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
