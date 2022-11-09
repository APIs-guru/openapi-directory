import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNflPositionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DraftPosition })
  draftPositions?: shared.DraftPosition[];

  @Metadata()
  statusCode: number;
}
