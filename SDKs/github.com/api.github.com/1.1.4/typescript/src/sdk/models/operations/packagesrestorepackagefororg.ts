import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackagesRestorePackageForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;
}


export class PackagesRestorePackageForOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class PackagesRestorePackageForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackagesRestorePackageForOrgPathParams;

  @Metadata()
  queryParams: PackagesRestorePackageForOrgQueryParams;
}


export class PackagesRestorePackageForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
