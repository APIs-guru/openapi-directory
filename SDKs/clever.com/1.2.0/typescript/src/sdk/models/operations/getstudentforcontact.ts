import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStudentForContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudentForContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStudentForContactPathParams;
}


export class GetStudentForContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studentResponse?: shared.StudentResponse;
}
