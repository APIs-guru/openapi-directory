import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PremiumAccessDownloadData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download_notes" })
  downloadNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=project_code" })
  projectCode?: string;
}
