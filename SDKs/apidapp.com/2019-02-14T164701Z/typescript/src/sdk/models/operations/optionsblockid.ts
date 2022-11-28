import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsBlockIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsBlockIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsBlockIdPathParams;
}


export class OptionsBlockIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
