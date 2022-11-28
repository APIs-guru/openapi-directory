import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EaseeSessionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class EaseeSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EaseeSessionsQueryParams;
}


export class EaseeSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.EaseeCharger })
  easeeChargers?: shared.EaseeCharger[];
}
