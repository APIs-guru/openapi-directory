import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WatchlistSearchallReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class WatchlistSearchallReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WatchlistSearchallReadPathParams;
}


export class WatchlistSearchallReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
