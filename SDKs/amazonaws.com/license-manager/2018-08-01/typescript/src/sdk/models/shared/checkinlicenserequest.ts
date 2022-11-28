import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CheckInLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Beneficiary" })
  beneficiary?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseConsumptionToken" })
  licenseConsumptionToken: string;
}
