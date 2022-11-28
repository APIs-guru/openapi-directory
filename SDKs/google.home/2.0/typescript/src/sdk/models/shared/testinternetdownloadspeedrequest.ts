import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestInternetDownloadSpeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
