import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UploadStatusQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: string[];
}
