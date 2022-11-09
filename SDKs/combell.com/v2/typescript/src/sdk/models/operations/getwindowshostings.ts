import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWindowsHostingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetWindowsHostingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWindowsHostingsQueryParams;
}


export class GetWindowsHostingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.WindowsHosting })
  windowsHostings?: shared.WindowsHosting[];
}
