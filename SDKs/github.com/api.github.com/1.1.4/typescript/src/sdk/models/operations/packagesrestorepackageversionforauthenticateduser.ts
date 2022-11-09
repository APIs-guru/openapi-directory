import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackagesRestorePackageVersionForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_version_id" })
  packageVersionId: number;
}


export class PackagesRestorePackageVersionForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackagesRestorePackageVersionForAuthenticatedUserPathParams;
}


export class PackagesRestorePackageVersionForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
