import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PageInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resultPerPage?: number;

  @SpeakeasyMetadata()
  startIndex?: number;

  @SpeakeasyMetadata()
  totalResults?: number;
}
