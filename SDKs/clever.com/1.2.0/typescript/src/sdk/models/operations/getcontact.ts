import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetContactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetContactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContactPathParams;
}


export class GetContactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;

  @Metadata()
  studentContactResponse?: shared.StudentContactResponse;
}
