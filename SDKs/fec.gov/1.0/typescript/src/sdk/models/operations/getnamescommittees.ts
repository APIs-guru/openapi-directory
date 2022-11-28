import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNamesCommitteesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string[];
}


export class GetNamesCommitteesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNamesCommitteesQueryParams;
}


export class GetNamesCommitteesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  committeeSearchList?: shared.CommitteeSearchList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
