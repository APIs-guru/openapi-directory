import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItemClipFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=clips" })
  clips: Map<string, any>[];

  @Metadata({ data: "json, name=id" })
  id: string;
}
