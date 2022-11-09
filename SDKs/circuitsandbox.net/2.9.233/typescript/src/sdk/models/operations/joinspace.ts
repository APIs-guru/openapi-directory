import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JoinSpacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class JoinSpaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class JoinSpaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JoinSpacePathParams;

  @Metadata()
  security: JoinSpaceSecurity;
}


export class JoinSpaceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  participantSpaceWrapper?: any;

  @Metadata()
  statusCode: number;
}
