import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeGetOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api2ControllersWebApiMeControllerPreferenceOptions?: shared.Api2ControllersWebApiMeControllerPreferenceOptions;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
