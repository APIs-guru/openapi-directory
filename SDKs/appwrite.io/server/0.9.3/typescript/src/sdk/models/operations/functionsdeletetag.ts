import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FunctionsDeleteTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: string;
}


export class FunctionsDeleteTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsDeleteTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FunctionsDeleteTagPathParams;

  @Metadata()
  security: FunctionsDeleteTagSecurity;
}


export class FunctionsDeleteTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
