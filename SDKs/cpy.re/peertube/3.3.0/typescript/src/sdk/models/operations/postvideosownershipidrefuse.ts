import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVideosOwnershipIdRefusePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class PostVideosOwnershipIdRefuseSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostVideosOwnershipIdRefuseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVideosOwnershipIdRefusePathParams;

  @SpeakeasyMetadata()
  security: PostVideosOwnershipIdRefuseSecurity;
}


export class PostVideosOwnershipIdRefuseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
