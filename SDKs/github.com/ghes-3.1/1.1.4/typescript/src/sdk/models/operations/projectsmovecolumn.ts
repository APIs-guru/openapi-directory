import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsMoveColumnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_id" })
  columnId: number;
}


export class ProjectsMoveColumnRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=position" })
  position: string;
}


export class ProjectsMoveColumnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsMoveColumnPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ProjectsMoveColumnRequestBody;
}


export class ProjectsMoveColumnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  projectsMoveColumn201ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
