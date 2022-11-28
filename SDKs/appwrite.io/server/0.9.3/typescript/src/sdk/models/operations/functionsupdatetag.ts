import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FunctionsUpdateTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;
}


export class FunctionsUpdateTagRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;
}


export class FunctionsUpdateTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsUpdateTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FunctionsUpdateTagPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: FunctionsUpdateTagRequestBody;

  @SpeakeasyMetadata()
  security: FunctionsUpdateTagSecurity;
}


export class FunctionsUpdateTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  function?: shared.Function;
}
