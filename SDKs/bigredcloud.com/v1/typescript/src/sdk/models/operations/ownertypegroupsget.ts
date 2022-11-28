import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OwnerTypeGroupsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultOwnerTypeGroupDto?: shared.PageResultOwnerTypeGroupDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
