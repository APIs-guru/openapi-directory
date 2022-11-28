import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSavedNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Example113 })
  example113s?: shared.Example113[];

  @SpeakeasyMetadata()
  statusCode: number;
}
