import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminListProvisionedGroupsEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludedAttributes" })
  excludedAttributes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class EnterpriseAdminListProvisionedGroupsEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminListProvisionedGroupsEnterprisePathParams;

  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams;
}


export class EnterpriseAdminListProvisionedGroupsEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimGroupListEnterprise?: shared.ScimGroupListEnterprise;
}
