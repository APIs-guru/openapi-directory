import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtendLicenseConsumptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Expiration" })
  expiration?: string;

  @Metadata({ data: "json, name=LicenseConsumptionToken" })
  licenseConsumptionToken?: string;
}
