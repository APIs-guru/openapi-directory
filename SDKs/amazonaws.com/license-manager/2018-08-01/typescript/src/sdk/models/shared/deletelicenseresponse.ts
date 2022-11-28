import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseDeletionStatusEnum } from "./licensedeletionstatusenum";



export class DeleteLicenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeletionDate" })
  deletionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: LicenseDeletionStatusEnum;
}
