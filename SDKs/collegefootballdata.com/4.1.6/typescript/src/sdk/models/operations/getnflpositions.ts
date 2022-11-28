import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNflPositionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DraftPosition })
  draftPositions?: shared.DraftPosition[];

  @SpeakeasyMetadata()
  statusCode: number;
}
