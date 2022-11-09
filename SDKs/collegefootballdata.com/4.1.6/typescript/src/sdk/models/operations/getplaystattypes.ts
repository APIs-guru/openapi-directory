import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlayStatTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PlayStatType })
  playStatTypes?: shared.PlayStatType[];

  @Metadata()
  statusCode: number;
}
