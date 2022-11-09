import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Destiny2SetQuestTrackedStateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class Destiny2SetQuestTrackedStateRequest extends SpeakeasyBase {
  @Metadata()
  security: Destiny2SetQuestTrackedStateSecurity;
}


export class Destiny2SetQuestTrackedStateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
