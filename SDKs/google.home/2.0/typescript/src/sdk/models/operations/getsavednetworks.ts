import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSavedNetworksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Example113 })
  example113s?: shared.Example113[];

  @Metadata()
  statusCode: number;
}
