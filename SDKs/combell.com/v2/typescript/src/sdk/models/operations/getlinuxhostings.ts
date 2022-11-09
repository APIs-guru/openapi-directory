import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinuxHostingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetLinuxHostingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLinuxHostingsQueryParams;
}


export class GetLinuxHostingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.LinuxHosting })
  linuxHostings?: shared.LinuxHosting[];

  @Metadata()
  statusCode: number;
}
