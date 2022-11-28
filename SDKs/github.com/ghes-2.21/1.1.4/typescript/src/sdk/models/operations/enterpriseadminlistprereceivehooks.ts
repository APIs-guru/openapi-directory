import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum EnterpriseAdminListPreReceiveHooksSortEnum {
    Created = "created",
    Updated = "updated",
    Name = "name"
}


export class EnterpriseAdminListPreReceiveHooksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: EnterpriseAdminListPreReceiveHooksSortEnum;
}


export class EnterpriseAdminListPreReceiveHooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListPreReceiveHooksQueryParams;
}


export class EnterpriseAdminListPreReceiveHooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.PreReceiveHook })
  preReceiveHooks?: shared.PreReceiveHook[];
}
