import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MediaSearchallReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class MediaSearchallReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MediaSearchallReadPathParams;
}


export class MediaSearchallReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
