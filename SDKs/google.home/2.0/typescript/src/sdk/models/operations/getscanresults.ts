import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScanResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Example112 })
  example112s?: shared.Example112[];

  @Metadata()
  statusCode: number;
}
