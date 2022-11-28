import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VatRatesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultVatRateDto?: shared.PageResultVatRateDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
