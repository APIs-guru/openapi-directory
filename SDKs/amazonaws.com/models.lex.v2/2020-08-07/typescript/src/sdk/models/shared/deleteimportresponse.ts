import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportStatusEnum } from "./importstatusenum";


export class DeleteImportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=importId" })
  importId?: string;

  @Metadata({ data: "json, name=importStatus" })
  importStatus?: ImportStatusEnum;
}
