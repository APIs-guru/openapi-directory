import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WatchlistSearchallReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class WatchlistSearchallReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WatchlistSearchallReadPathParams;
}


export class WatchlistSearchallReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
