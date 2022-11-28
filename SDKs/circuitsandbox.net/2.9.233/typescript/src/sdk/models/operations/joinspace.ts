import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JoinSpacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class JoinSpaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class JoinSpaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JoinSpacePathParams;

  @SpeakeasyMetadata()
  security: JoinSpaceSecurity;
}


export class JoinSpaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantSpaceWrapper?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
