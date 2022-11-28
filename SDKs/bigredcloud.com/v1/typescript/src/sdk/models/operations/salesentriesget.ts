import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SalesEntriesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultSalesEntryQueryDto?: shared.PageResultSalesEntryQueryDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
