import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadStatusQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];
}
