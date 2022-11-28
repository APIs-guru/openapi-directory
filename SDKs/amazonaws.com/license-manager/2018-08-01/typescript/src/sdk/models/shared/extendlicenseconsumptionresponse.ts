import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtendLicenseConsumptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Expiration" })
  expiration?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseConsumptionToken" })
  licenseConsumptionToken?: string;
}
