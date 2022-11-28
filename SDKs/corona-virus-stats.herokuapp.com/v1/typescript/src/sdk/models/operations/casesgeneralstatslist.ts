import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CasesGeneralStatsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GeneralStats })
  generalStats?: shared.GeneralStats[];

  @SpeakeasyMetadata()
  statusCode: number;
}
