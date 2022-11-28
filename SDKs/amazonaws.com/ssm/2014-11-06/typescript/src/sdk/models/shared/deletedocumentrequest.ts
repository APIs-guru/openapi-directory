import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=VersionName" })
  versionName?: string;
}
