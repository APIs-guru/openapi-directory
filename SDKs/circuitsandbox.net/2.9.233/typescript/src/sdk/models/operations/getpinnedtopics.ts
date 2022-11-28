import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPinnedTopicsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPinnedTopicsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPinnedTopicsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPinnedTopicsPathParams;

  @SpeakeasyMetadata()
  security: GetPinnedTopicsSecurity;
}


export class GetPinnedTopicsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spacePinnedTopics?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
