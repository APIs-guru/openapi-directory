import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SalesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultSalesQueryDto?: shared.PageResultSalesQueryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
