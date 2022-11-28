import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetItemWatchedStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class SetItemWatchedStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" })
  position: number;
}


export class SetItemWatchedStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class SetItemWatchedStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetItemWatchedStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: SetItemWatchedStatusQueryParams;

  @SpeakeasyMetadata()
  security: SetItemWatchedStatusSecurity;
}


export class SetItemWatchedStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  watched?: shared.Watched;
}
