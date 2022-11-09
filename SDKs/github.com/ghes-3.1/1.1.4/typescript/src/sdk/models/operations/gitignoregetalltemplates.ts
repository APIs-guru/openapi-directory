import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GitignoreGetAllTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  gitignoreGetAllTemplates200ApplicationJsonStrings?: string[];
}
