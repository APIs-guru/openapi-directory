import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExtendedLicensesEnum } from "./extendedlicensesenum";


export class AcquireAssetLicensesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseTypes" })
  licenseTypes: ExtendedLicensesEnum[];

  @Metadata({ data: "json, name=UseTeamCredits" })
  useTeamCredits?: boolean;
}
