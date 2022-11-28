import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Destiny2SetQuestTrackedStateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class Destiny2SetQuestTrackedStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: Destiny2SetQuestTrackedStateSecurity;
}


export class Destiny2SetQuestTrackedStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
