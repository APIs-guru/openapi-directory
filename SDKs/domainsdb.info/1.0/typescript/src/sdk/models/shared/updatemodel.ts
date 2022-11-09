import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added?: string;

  @Metadata({ data: "json, name=added_download" })
  addedDownload?: string;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: string;

  @Metadata({ data: "json, name=deleted_download" })
  deletedDownload?: string;
}
