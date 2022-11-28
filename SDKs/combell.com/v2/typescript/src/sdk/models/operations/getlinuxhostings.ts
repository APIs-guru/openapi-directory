import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLinuxHostingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetLinuxHostingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLinuxHostingsQueryParams;
}


export class GetLinuxHostingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.LinuxHosting })
  linuxHostings?: shared.LinuxHosting[];

  @SpeakeasyMetadata()
  statusCode: number;
}
