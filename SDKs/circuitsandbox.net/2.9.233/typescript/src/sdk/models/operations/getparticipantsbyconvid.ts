import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetParticipantsByConvIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}

export enum GetParticipantsByConvIdTypeEnum {
    Regular = "REGULAR"
,    Moderator = "MODERATOR"
,    Guest = "GUEST"
,    Former = "FORMER"
,    Bot = "BOT"
}


export class GetParticipantsByConvIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchPointer" })
  searchPointer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetParticipantsByConvIdTypeEnum;
}


export class GetParticipantsByConvIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetParticipantsByConvIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetParticipantsByConvIdPathParams;

  @Metadata()
  queryParams: GetParticipantsByConvIdQueryParams;

  @Metadata()
  security: GetParticipantsByConvIdSecurity;
}


export class GetParticipantsByConvIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversationParticipantsLists?: any[];

  @Metadata()
  statusCode: number;
}
