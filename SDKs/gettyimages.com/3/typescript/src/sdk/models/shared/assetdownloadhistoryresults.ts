import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssetDownloadHistoryResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloads" })
  downloads?: any;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
