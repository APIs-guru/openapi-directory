import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInboxRegistrationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=folder_behavior_id" })
  folderBehaviorId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetInboxRegistrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetInboxRegistrationsQueryParams;
}


export class GetInboxRegistrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.InboxRegistrationEntity })
  inboxRegistrationEntities?: shared.InboxRegistrationEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
