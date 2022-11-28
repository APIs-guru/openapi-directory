import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGradeLevelsForTeacherPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetGradeLevelsForTeacherRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGradeLevelsForTeacherPathParams;
}


export class GetGradeLevelsForTeacherResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  gradeLevelsResponse?: shared.GradeLevelsResponse;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  statusCode: number;
}
