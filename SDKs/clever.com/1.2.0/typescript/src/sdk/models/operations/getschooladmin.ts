import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchoolAdminPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolAdminQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetSchoolAdminRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchoolAdminPathParams;

  @Metadata()
  queryParams: GetSchoolAdminQueryParams;
}


export class GetSchoolAdminResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  schoolAdminResponse?: shared.SchoolAdminResponse;

  @Metadata()
  statusCode: number;
}
