import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CasesGeneralStatsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GeneralStats })
  generalStats?: shared.GeneralStats[];

  @Metadata()
  statusCode: number;
}
