import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItemClipFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clips" })
  clips: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
