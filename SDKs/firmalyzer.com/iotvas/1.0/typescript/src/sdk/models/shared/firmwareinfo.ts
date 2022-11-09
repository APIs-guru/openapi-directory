import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FirmwareInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @Metadata({ data: "json, name=sha2" })
  sha2?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
