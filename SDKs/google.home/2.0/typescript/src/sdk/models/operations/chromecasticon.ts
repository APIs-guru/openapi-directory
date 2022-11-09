import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChromecastIconResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
