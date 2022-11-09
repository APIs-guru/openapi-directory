import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  districtsResponse?: shared.DistrictsResponse;

  @Metadata()
  statusCode: number;
}
