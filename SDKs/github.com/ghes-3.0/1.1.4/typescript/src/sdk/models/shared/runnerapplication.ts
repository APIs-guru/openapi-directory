import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RunnerApplication
/** 
 * Runner Application
**/
export class RunnerApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture: string;

  @Metadata({ data: "json, name=download_url" })
  downloadUrl: string;

  @Metadata({ data: "json, name=filename" })
  filename: string;

  @Metadata({ data: "json, name=os" })
  os: string;

  @Metadata({ data: "json, name=sha256_checksum" })
  sha256Checksum?: string;

  @Metadata({ data: "json, name=temp_download_token" })
  tempDownloadToken?: string;
}
