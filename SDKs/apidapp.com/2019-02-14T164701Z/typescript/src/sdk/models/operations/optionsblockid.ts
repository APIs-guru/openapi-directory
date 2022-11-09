import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsBlockIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsBlockIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsBlockIdPathParams;
}


export class OptionsBlockIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
