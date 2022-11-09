import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentFormatEnum } from "./documentformatenum";


export class GetDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentFormat" })
  documentFormat?: DocumentFormatEnum;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=VersionName" })
  versionName?: string;
}
