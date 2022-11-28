import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProgrammesByParentPidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetProgrammesByParentPidQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=initial_child_count" })
  initialChildCount: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetProgrammesByParentPidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProgrammesByParentPidPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProgrammesByParentPidQueryParams;
}


export class GetProgrammesByParentPidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
