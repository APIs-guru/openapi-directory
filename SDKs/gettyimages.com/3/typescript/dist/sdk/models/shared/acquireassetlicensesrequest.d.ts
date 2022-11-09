import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExtendedLicensesEnum } from "./extendedlicensesenum";
export declare class AcquireAssetLicensesRequest extends SpeakeasyBase {
    licenseTypes: ExtendedLicensesEnum[];
    useTeamCredits?: boolean;
}
