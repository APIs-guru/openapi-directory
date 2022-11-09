import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BookTranTypesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultBookTranTypeDto?: shared.PageResultBookTranTypeDto;

  @Metadata()
  statusCode: number;
}
