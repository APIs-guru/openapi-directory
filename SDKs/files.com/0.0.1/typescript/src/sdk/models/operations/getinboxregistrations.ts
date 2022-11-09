import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInboxRegistrationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=folder_behavior_id" })
  folderBehaviorId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetInboxRegistrationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInboxRegistrationsQueryParams;
}


export class GetInboxRegistrationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.InboxRegistrationEntity })
  inboxRegistrationEntities?: shared.InboxRegistrationEntity[];

  @Metadata()
  statusCode: number;
}
