import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams;

  @Metadata()
  queryParams: EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams;
}


export class EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimUserListEnterprise?: shared.ScimUserListEnterprise;
}
