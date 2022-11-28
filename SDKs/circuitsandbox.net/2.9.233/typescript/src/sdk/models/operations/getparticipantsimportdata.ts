import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetParticipantsImportDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class GetParticipantsImportDataSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetParticipantsImportDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetParticipantsImportDataPathParams;

  @SpeakeasyMetadata()
  security: GetParticipantsImportDataSecurity;
}


export class GetParticipantsImportDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantsImportDataResult?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
