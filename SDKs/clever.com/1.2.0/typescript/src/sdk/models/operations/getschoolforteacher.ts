import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchoolForTeacherPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolForTeacherRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchoolForTeacherPathParams;
}


export class GetSchoolForTeacherResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  schoolResponse?: shared.SchoolResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
