import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItemDownloadableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string;
}
