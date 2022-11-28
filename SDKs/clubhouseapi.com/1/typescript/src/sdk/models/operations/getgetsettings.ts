import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGetSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
