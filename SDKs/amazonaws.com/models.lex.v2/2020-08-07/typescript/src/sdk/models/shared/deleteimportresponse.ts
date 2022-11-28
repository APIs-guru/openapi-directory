import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";



export class DeleteImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importId" })
  importId?: string;

  @SpeakeasyMetadata({ data: "json, name=importStatus" })
  importStatus?: ImportStatusEnum;
}
