import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConferencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Conference })
  conferences?: shared.Conference[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
