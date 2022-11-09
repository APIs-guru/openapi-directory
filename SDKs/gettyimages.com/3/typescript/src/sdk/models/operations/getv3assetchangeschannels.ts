import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3AssetChangesChannelsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Channel })
  channels?: shared.Channel[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
