import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsKeyKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class OptionsKeyKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsKeyKeyPathParams;
}


export class OptionsKeyKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
