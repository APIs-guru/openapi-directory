import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LicenseDeletionStatusEnum } from "./licensedeletionstatusenum";


export class DeleteLicenseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeletionDate" })
  deletionDate?: string;

  @Metadata({ data: "json, name=Status" })
  status?: LicenseDeletionStatusEnum;
}
