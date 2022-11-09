import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MgetInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=infoArray" })
  infoArray: string[];
}


export class MgetInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MgetInfoPathParams;
}


export class MgetInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mgetInfo200ApplicationJsonObjects?: Map<string, any>[];
}
