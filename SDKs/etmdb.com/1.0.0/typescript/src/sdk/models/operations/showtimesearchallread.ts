import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShowtimeSearchallReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class ShowtimeSearchallReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShowtimeSearchallReadPathParams;
}


export class ShowtimeSearchallReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
