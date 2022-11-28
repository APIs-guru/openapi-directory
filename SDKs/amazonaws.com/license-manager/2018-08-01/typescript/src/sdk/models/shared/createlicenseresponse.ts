import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseStatusEnum } from "./licensestatusenum";



export class CreateLicenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: LicenseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
