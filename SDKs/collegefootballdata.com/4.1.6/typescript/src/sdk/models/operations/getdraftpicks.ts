import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDraftPicksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=college" })
  college?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nflTeam" })
  nflTeam?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetDraftPicksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDraftPicksQueryParams;
}


export class GetDraftPicksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DraftPick })
  draftPicks?: shared.DraftPick[];

  @SpeakeasyMetadata()
  statusCode: number;
}
