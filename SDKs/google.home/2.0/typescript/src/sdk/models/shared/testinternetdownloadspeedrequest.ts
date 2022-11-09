import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestInternetDownloadSpeedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url: string;
}
