import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OwnerTypesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultOwnerTypeDto?: shared.PageResultOwnerTypeDto;

  @Metadata()
  statusCode: number;
}
