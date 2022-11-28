import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MgetInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=infoArray" })
  infoArray: string[];
}


export class MgetInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MgetInfoPathParams;
}


export class MgetInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mgetInfo200ApplicationJsonObjects?: Map<string, any>[];
}
