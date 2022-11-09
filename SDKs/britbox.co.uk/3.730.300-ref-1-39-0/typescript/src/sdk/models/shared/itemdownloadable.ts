import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItemDownloadable extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadable" })
  downloadable: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;
}
