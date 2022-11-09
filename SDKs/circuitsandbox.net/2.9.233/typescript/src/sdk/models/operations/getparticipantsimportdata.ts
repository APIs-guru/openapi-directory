import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetParticipantsImportDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class GetParticipantsImportDataSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetParticipantsImportDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetParticipantsImportDataPathParams;

  @Metadata()
  security: GetParticipantsImportDataSecurity;
}


export class GetParticipantsImportDataResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  participantsImportDataResult?: any;

  @Metadata()
  statusCode: number;
}
