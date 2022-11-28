import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchoolAdminPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolAdminQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetSchoolAdminRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchoolAdminPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSchoolAdminQueryParams;
}


export class GetSchoolAdminResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  schoolAdminResponse?: shared.SchoolAdminResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
