import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LicenseConfigurationAssociation } from "./licenseconfigurationassociation";


export class ListAssociationsForLicenseConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseConfigurationAssociations", elemType: shared.LicenseConfigurationAssociation })
  licenseConfigurationAssociations?: LicenseConfigurationAssociation[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
