import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEpisodesByParentPidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetEpisodesByParentPidQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=initial_child_count" })
  initialChildCount: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetEpisodesByParentPidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEpisodesByParentPidPathParams;

  @Metadata()
  queryParams: GetEpisodesByParentPidQueryParams;
}


export class GetEpisodesByParentPidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
