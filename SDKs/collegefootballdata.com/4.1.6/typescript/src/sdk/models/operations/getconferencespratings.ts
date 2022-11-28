import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConferenceSpRatingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetConferenceSpRatingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConferenceSpRatingsQueryParams;
}


export class GetConferenceSpRatingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ConferenceSpRating })
  conferenceSpRatings?: shared.ConferenceSpRating[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
