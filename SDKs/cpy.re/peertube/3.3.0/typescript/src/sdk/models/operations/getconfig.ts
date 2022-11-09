import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serverConfig?: any;

  @Metadata()
  statusCode: number;
}
