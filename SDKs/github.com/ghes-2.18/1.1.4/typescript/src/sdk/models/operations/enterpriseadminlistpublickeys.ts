import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum EnterpriseAdminListPublicKeysSortEnum {
    Created = "created",
    Updated = "updated",
    Accessed = "accessed"
}


export class EnterpriseAdminListPublicKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: EnterpriseAdminListPublicKeysSortEnum;
}


export class EnterpriseAdminListPublicKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListPublicKeysQueryParams;
}


export class EnterpriseAdminListPublicKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.EnterprisePublicKey })
  enterprisePublicKeys?: shared.EnterprisePublicKey[];
}
