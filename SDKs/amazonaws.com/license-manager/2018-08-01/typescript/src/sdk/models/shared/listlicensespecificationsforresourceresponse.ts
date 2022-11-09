import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LicenseSpecification } from "./licensespecification";


export class ListLicenseSpecificationsForResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseSpecifications", elemType: shared.LicenseSpecification })
  licenseSpecifications?: LicenseSpecification[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
