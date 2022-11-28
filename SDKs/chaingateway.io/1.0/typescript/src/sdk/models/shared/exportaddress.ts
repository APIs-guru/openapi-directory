import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExportAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;
}
