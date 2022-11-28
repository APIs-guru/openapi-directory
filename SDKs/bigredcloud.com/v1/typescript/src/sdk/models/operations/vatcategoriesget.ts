import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VatCategoriesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultVatCategoryDto?: shared.PageResultVatCategoryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
