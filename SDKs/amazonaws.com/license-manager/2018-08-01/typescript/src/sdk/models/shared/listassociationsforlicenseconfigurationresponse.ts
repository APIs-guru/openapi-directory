import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseConfigurationAssociation } from "./licenseconfigurationassociation";



export class ListAssociationsForLicenseConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurationAssociations", elemType: LicenseConfigurationAssociation })
  licenseConfigurationAssociations?: LicenseConfigurationAssociation[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
