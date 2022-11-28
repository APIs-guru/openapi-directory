import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssetDownloadHistoryResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloads" })
  downloads?: any;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
