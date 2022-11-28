import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FirmwareInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=sha2" })
  sha2?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
