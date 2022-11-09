import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MeGetOptionsResponse extends SpeakeasyBase {
  @Metadata()
  api2ControllersWebApiMeControllerPreferenceOptions?: shared.Api2ControllersWebApiMeControllerPreferenceOptions;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
