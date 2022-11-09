import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EnterpriseAdminListPreReceiveHooksSortEnum {
    Created = "created"
,    Updated = "updated"
,    Name = "name"
}


export class EnterpriseAdminListPreReceiveHooksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: EnterpriseAdminListPreReceiveHooksSortEnum;
}


export class EnterpriseAdminListPreReceiveHooksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EnterpriseAdminListPreReceiveHooksQueryParams;
}


export class EnterpriseAdminListPreReceiveHooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.PreReceiveHook })
  preReceiveHooks?: shared.PreReceiveHook[];
}
