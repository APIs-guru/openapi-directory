import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VatRatesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultVatRateDto?: shared.PageResultVatRateDto;

  @Metadata()
  statusCode: number;
}
