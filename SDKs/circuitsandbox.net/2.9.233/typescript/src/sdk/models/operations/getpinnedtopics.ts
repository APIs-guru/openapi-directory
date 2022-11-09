import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPinnedTopicsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPinnedTopicsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPinnedTopicsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPinnedTopicsPathParams;

  @Metadata()
  security: GetPinnedTopicsSecurity;
}


export class GetPinnedTopicsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  spacePinnedTopics?: any[];

  @Metadata()
  statusCode: number;
}
