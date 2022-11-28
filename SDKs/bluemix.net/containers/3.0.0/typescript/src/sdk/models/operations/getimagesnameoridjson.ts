import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImagesNameOrIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class GetImagesNameOrIdJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetImagesNameOrIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagesNameOrIdJsonPathParams;

  @SpeakeasyMetadata()
  headers: GetImagesNameOrIdJsonHeaders;
}


export class GetImagesNameOrIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageDetail?: shared.ImageDetail;

  @SpeakeasyMetadata()
  statusCode: number;
}
