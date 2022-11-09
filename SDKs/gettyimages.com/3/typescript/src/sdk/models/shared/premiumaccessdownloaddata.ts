import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PremiumAccessDownloadData extends SpeakeasyBase {
  @Metadata({ data: "json, name=download_notes" })
  downloadNotes?: string;

  @Metadata({ data: "json, name=project_code" })
  projectCode?: string;
}
