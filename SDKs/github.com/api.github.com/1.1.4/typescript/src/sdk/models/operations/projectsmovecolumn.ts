import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsMoveColumnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_id" })
  columnId: number;
}


export class ProjectsMoveColumnRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=position" })
  position: string;
}


export class ProjectsMoveColumnRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsMoveColumnPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ProjectsMoveColumnRequestBody;
}


export class ProjectsMoveColumnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  projectsMoveColumn201ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
