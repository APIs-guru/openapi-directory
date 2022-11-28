import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseSpecification } from "./licensespecification";



export class ListLicenseSpecificationsForResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseSpecifications", elemType: LicenseSpecification })
  licenseSpecifications?: LicenseSpecification[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
