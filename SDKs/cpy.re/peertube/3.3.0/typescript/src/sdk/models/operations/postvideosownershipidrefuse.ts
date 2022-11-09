import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVideosOwnershipIdRefusePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class PostVideosOwnershipIdRefuseSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostVideosOwnershipIdRefuseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVideosOwnershipIdRefusePathParams;

  @Metadata()
  security: PostVideosOwnershipIdRefuseSecurity;
}


export class PostVideosOwnershipIdRefuseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
