import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPostRollsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetPostRollsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetPostRollsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPostRollsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPostRollsQueryParams;
}


export class GetPostRollsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
