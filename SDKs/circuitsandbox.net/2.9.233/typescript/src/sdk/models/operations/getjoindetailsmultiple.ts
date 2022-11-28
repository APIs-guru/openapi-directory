import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJoinDetailsMultipleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=convIds" })
  convIds: string[];
}


export class GetJoinDetailsMultipleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetJoinDetailsMultipleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetJoinDetailsMultipleQueryParams;

  @SpeakeasyMetadata()
  security: GetJoinDetailsMultipleSecurity;
}


export class GetJoinDetailsMultipleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationDetails?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
