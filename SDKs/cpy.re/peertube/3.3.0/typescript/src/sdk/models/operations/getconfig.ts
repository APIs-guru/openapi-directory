import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverConfig?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
