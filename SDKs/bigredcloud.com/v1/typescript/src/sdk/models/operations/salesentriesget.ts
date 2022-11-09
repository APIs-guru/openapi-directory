import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesEntriesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultSalesEntryQueryDto?: shared.PageResultSalesEntryQueryDto;

  @Metadata()
  statusCode: number;
}
