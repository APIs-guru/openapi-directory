import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDraftPicksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=college" })
  college?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nflTeam" })
  nflTeam?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetDraftPicksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDraftPicksQueryParams;
}


export class GetDraftPicksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DraftPick })
  draftPicks?: shared.DraftPick[];

  @Metadata()
  statusCode: number;
}
