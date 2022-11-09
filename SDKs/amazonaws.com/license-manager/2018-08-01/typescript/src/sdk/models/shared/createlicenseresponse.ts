import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LicenseStatusEnum } from "./licensestatusenum";


export class CreateLicenseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: LicenseStatusEnum;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
