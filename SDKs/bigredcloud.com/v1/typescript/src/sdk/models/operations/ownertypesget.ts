import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OwnerTypesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageResultOwnerTypeDto?: shared.PageResultOwnerTypeDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
