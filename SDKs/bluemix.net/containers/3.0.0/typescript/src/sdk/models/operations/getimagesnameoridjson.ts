import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetImagesNameOrIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class GetImagesNameOrIdJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetImagesNameOrIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetImagesNameOrIdJsonPathParams;

  @Metadata()
  headers: GetImagesNameOrIdJsonHeaders;
}


export class GetImagesNameOrIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageDetail?: shared.ImageDetail;

  @Metadata()
  statusCode: number;
}
