import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppsGetAuthenticatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  integration?: Map<string, any>;
}
