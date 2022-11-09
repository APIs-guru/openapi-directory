import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NightModesettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NightModesettingsRequest;
}


export class NightModesettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  example17?: shared.Example17;

  @Metadata()
  statusCode: number;
}
