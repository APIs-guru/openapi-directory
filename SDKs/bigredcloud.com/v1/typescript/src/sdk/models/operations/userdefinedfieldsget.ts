import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserDefinedFieldsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultUserDefinedFieldDto?: shared.PageResultUserDefinedFieldDto;

  @Metadata()
  statusCode: number;
}
