import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProgrammeByPidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetProgrammeByPidQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetProgrammeByPidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProgrammeByPidPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProgrammeByPidQueryParams;
}


export class GetProgrammeByPidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
