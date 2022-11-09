import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OwnerTypeGroupsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pageResultOwnerTypeGroupDto?: shared.PageResultOwnerTypeGroupDto;

  @Metadata()
  statusCode: number;
}
