import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContactsForStudentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetContactsForStudentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetContactsForStudentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContactsForStudentPathParams;

  @SpeakeasyMetadata()
  queryParams: GetContactsForStudentQueryParams;
}


export class GetContactsForStudentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  studentContactsForStudentResponse?: shared.StudentContactsForStudentResponse;
}
