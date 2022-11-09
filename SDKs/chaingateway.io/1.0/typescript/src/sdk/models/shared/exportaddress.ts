import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExportAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=filename" })
  filename: string;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;
}
