import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCalendarQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetCalendarRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCalendarQueryParams;
}


export class GetCalendarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Week })
  weeks?: shared.Week[];
}
