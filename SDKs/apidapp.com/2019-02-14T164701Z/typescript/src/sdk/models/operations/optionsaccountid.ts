import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsAccountIdPathParams;
}


export class OptionsAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
