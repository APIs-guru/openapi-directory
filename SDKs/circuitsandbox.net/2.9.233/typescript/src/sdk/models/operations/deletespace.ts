import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSpacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSpaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteSpaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSpacePathParams;

  @SpeakeasyMetadata()
  security: DeleteSpaceSecurity;
}


export class DeleteSpaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
