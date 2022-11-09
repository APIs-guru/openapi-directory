import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConferencesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Conference })
  conferences?: shared.Conference[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
