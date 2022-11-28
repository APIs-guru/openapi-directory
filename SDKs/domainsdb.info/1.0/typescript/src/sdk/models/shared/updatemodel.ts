import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added?: string;

  @SpeakeasyMetadata({ data: "json, name=added_download" })
  addedDownload?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted_download" })
  deletedDownload?: string;
}
