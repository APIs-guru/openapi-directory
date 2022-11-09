import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LicenseOperationFailure } from "./licenseoperationfailure";


export class ListFailuresForLicenseConfigurationOperationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseOperationFailureList", elemType: shared.LicenseOperationFailure })
  licenseOperationFailureList?: LicenseOperationFailure[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
