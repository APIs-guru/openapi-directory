import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BookTranTypesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultBookTranTypeDto?: shared.PageResultBookTranTypeDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
