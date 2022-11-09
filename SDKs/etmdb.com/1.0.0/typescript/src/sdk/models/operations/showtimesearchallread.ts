import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ShowtimeSearchallReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class ShowtimeSearchallReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShowtimeSearchallReadPathParams;
}


export class ShowtimeSearchallReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
