import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MediaSearchallReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class MediaSearchallReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MediaSearchallReadPathParams;
}


export class MediaSearchallReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
