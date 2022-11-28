import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveParticipantGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class RemoveParticipantGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=participants" })
  participants: string[];
}


export class RemoveParticipantGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RemoveParticipantGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveParticipantGroupPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveParticipantGroupQueryParams;

  @SpeakeasyMetadata()
  security: RemoveParticipantGroupSecurity;
}


export class RemoveParticipantGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversation?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
