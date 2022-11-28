import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtendLicenseConsumptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LicenseConsumptionToken" })
  licenseConsumptionToken: string;
}
