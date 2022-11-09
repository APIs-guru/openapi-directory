import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultSalesQueryDto?: shared.PageResultSalesQueryDto;

  @Metadata()
  statusCode: number;
}
