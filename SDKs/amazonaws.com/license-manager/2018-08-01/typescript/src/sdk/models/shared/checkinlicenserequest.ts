import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CheckInLicenseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Beneficiary" })
  beneficiary?: string;

  @Metadata({ data: "json, name=LicenseConsumptionToken" })
  licenseConsumptionToken: string;
}
