import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class OrgsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: OrgsListQueryParams;
}


export class OrgsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.OrganizationSimple })
  organizationSimples?: shared.OrganizationSimple[];
}
