import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=VersionName" })
  versionName?: string;
}
