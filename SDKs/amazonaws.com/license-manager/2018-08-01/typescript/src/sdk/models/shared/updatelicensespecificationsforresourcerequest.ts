import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseSpecification } from "./licensespecification";



export class UpdateLicenseSpecificationsForResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddLicenseSpecifications", elemType: LicenseSpecification })
  addLicenseSpecifications?: LicenseSpecification[];

  @SpeakeasyMetadata({ data: "json, name=RemoveLicenseSpecifications", elemType: LicenseSpecification })
  removeLicenseSpecifications?: LicenseSpecification[];

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
