import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlayStatTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PlayStatType })
  playStatTypes?: shared.PlayStatType[];

  @SpeakeasyMetadata()
  statusCode: number;
}
