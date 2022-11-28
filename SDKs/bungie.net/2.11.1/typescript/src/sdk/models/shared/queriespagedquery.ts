import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueriesPagedQuery extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currentPage?: number;

  @SpeakeasyMetadata()
  itemsPerPage?: number;

  @SpeakeasyMetadata()
  requestContinuationToken?: string;
}
