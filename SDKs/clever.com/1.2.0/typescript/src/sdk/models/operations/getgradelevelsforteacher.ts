import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGradeLevelsForTeacherPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetGradeLevelsForTeacherRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGradeLevelsForTeacherPathParams;
}


export class GetGradeLevelsForTeacherResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  gradeLevelsResponse?: shared.GradeLevelsResponse;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;
}
