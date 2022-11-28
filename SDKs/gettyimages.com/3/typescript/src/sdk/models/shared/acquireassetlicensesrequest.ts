import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtendedLicensesEnum } from "./extendedlicensesenum";



export class AcquireAssetLicensesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseTypes" })
  licenseTypes: ExtendedLicensesEnum[];

  @SpeakeasyMetadata({ data: "json, name=UseTeamCredits" })
  useTeamCredits?: boolean;
}
