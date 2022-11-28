import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseUsage } from "./licenseusage";



export class GetLicenseUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseUsage" })
  licenseUsage?: LicenseUsage;
}
