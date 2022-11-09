import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNamesCommitteesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string[];
}


export class GetNamesCommitteesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNamesCommitteesQueryParams;
}


export class GetNamesCommitteesResponse extends SpeakeasyBase {
  @Metadata()
  committeeSearchList?: shared.CommitteeSearchList;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
