import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DownloadRequirements extends SpeakeasyBase {
  @Metadata({ data: "json, name=is_note_required" })
  isNoteRequired?: boolean;

  @Metadata({ data: "json, name=is_project_code_required" })
  isProjectCodeRequired?: boolean;

  @Metadata({ data: "json, name=project_codes" })
  projectCodes?: string[];
}
