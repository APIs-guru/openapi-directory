import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum EnterpriseAdminListPreReceiveEnvironmentsSortEnum {
    Created = "created",
    Updated = "updated",
    Name = "name"
}


export class EnterpriseAdminListPreReceiveEnvironmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: EnterpriseAdminListPreReceiveEnvironmentsSortEnum;
}


export class EnterpriseAdminListPreReceiveEnvironmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListPreReceiveEnvironmentsQueryParams;
}


export class EnterpriseAdminListPreReceiveEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.PreReceiveEnvironment })
  preReceiveEnvironments?: shared.PreReceiveEnvironment[];
}
