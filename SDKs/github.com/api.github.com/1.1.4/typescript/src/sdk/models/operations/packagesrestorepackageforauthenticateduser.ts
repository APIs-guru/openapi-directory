import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackagesRestorePackageForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;
}


export class PackagesRestorePackageForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class PackagesRestorePackageForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackagesRestorePackageForAuthenticatedUserPathParams;

  @Metadata()
  queryParams: PackagesRestorePackageForAuthenticatedUserQueryParams;
}


export class PackagesRestorePackageForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
