import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeacherPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTeacherQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetTeacherRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeacherPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTeacherQueryParams;
}


export class GetTeacherResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teacherResponse?: shared.TeacherResponse;
}
