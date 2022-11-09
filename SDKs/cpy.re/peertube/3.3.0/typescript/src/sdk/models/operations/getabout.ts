import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAboutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serverConfigAbout?: any;

  @Metadata()
  statusCode: number;
}
