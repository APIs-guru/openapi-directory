import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LicenseUsage } from "./licenseusage";


export class GetLicenseUsageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseUsage" })
  licenseUsage?: LicenseUsage;
}
