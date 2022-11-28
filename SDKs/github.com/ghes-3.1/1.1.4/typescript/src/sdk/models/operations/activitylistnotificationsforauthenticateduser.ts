import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityListNotificationsForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=participating" })
  participating?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;
}


export class ActivityListNotificationsForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ActivityListNotificationsForAuthenticatedUserQueryParams;
}


export class ActivityListNotificationsForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.Thread })
  threads?: shared.Thread[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
