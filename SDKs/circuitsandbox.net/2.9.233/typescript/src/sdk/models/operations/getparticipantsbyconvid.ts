import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetParticipantsByConvIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}

export enum GetParticipantsByConvIdTypeEnum {
    Regular = "REGULAR",
    Moderator = "MODERATOR",
    Guest = "GUEST",
    Former = "FORMER",
    Bot = "BOT"
}


export class GetParticipantsByConvIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchPointer" })
  searchPointer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetParticipantsByConvIdTypeEnum;
}


export class GetParticipantsByConvIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetParticipantsByConvIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetParticipantsByConvIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetParticipantsByConvIdQueryParams;

  @SpeakeasyMetadata()
  security: GetParticipantsByConvIdSecurity;
}


export class GetParticipantsByConvIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationParticipantsLists?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
