import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAdminBadgesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAdminBadgesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAdminBadgesIdJsonPathParams;
}


export class DeleteAdminBadgesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
