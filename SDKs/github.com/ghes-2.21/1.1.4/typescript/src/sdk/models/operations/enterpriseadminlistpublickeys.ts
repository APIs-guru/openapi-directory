import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EnterpriseAdminListPublicKeysSortEnum {
    Created = "created"
,    Updated = "updated"
,    Accessed = "accessed"
}


export class EnterpriseAdminListPublicKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: EnterpriseAdminListPublicKeysSortEnum;
}


export class EnterpriseAdminListPublicKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EnterpriseAdminListPublicKeysQueryParams;
}


export class EnterpriseAdminListPublicKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.EnterprisePublicKey })
  enterprisePublicKeys?: shared.EnterprisePublicKey[];
}
