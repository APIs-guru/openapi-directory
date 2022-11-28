import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserDefinedFieldsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultUserDefinedFieldDto?: shared.PageResultUserDefinedFieldDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
