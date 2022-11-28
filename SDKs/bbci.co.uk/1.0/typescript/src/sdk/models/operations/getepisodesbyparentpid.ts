import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEpisodesByParentPidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetEpisodesByParentPidQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=initial_child_count" })
  initialChildCount: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetEpisodesByParentPidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEpisodesByParentPidPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEpisodesByParentPidQueryParams;
}


export class GetEpisodesByParentPidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
