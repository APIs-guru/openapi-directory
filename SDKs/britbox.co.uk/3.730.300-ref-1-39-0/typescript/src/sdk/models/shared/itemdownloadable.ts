import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItemDownloadable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadable" })
  downloadable: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
