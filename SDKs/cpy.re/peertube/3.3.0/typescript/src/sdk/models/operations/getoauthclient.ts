import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOAuthClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  oAuthClient?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
