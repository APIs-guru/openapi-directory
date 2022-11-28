import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseOperationFailure } from "./licenseoperationfailure";



export class ListFailuresForLicenseConfigurationOperationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseOperationFailureList", elemType: LicenseOperationFailure })
  licenseOperationFailureList?: LicenseOperationFailure[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
