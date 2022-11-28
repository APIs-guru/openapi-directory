import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RunnerApplication
/** 
 * Runner Application
**/
export class RunnerApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture: string;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os: string;
}
