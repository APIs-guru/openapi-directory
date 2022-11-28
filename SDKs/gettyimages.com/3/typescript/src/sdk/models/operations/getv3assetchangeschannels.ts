import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3AssetChangesChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Channel })
  channels?: shared.Channel[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
