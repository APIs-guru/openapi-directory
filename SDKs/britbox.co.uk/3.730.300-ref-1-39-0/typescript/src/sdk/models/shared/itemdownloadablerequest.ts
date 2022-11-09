import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItemDownloadableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: string;
}
