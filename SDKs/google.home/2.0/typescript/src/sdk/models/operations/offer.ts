import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OfferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  example12?: shared.Example12;

  @Metadata()
  statusCode: number;
}
