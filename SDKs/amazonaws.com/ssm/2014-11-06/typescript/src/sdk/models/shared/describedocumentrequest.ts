import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=VersionName" })
  versionName?: string;
}
