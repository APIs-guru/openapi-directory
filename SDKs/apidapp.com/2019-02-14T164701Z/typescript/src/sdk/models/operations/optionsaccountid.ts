import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsAccountIdPathParams;
}


export class OptionsAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
