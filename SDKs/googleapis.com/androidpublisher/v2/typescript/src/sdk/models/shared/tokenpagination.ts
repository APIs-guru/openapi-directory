import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TokenPagination extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextPageToken?: string;

  @SpeakeasyMetadata()
  previousPageToken?: string;
}
