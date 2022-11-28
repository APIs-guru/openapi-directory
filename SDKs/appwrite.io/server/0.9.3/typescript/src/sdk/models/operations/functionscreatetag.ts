import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FunctionsCreateTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;
}


export class FunctionsCreateTagRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=command" })
  command: string;
}


export class FunctionsCreateTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsCreateTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FunctionsCreateTagPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: FunctionsCreateTagRequestBody;

  @SpeakeasyMetadata()
  security: FunctionsCreateTagSecurity;
}


export class FunctionsCreateTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tag?: shared.Tag;
}
