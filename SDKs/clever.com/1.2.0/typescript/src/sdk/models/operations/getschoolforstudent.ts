import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchoolForStudentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolForStudentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchoolForStudentPathParams;
}


export class GetSchoolForStudentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  schoolResponse?: shared.SchoolResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
