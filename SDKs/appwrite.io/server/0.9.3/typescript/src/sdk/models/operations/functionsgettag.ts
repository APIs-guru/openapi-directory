import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FunctionsGetTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: string;
}


export class FunctionsGetTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class FunctionsGetTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FunctionsGetTagPathParams;

  @Metadata()
  security: FunctionsGetTagSecurity;
}


export class FunctionsGetTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tag?: shared.Tag;
}
