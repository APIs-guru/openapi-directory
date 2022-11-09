import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProgrammeByPidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetProgrammeByPidQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetProgrammeByPidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProgrammeByPidPathParams;

  @Metadata()
  queryParams: GetProgrammeByPidQueryParams;
}


export class GetProgrammeByPidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
