import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LicenseSpecification } from "./licensespecification";
import { LicenseSpecification } from "./licensespecification";


export class UpdateLicenseSpecificationsForResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddLicenseSpecifications", elemType: shared.LicenseSpecification })
  addLicenseSpecifications?: LicenseSpecification[];

  @Metadata({ data: "json, name=RemoveLicenseSpecifications", elemType: shared.LicenseSpecification })
  removeLicenseSpecifications?: LicenseSpecification[];

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
