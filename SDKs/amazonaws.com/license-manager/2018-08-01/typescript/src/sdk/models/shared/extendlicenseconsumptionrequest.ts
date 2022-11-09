import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtendLicenseConsumptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=LicenseConsumptionToken" })
  licenseConsumptionToken: string;
}
