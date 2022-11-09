import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EaseeSessionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=password" })
  password?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class EaseeSessionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EaseeSessionsQueryParams;
}


export class EaseeSessionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.EaseeCharger })
  easeeChargers?: shared.EaseeCharger[];
}
