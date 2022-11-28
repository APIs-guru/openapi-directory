import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadRequirements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_note_required" })
  isNoteRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_project_code_required" })
  isProjectCodeRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=project_codes" })
  projectCodes?: string[];
}
