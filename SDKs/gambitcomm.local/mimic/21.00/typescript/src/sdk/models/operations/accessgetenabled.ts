import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessGetEnabledResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accessGetEnabled200ApplicationJsonString?: string;
}
