import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConferenceSpRatingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetConferenceSpRatingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConferenceSpRatingsQueryParams;
}


export class GetConferenceSpRatingsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ConferenceSpRating })
  conferenceSpRatings?: shared.ConferenceSpRating[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
