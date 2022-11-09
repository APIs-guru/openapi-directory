import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PackagesGetPackageVersionForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_version_id" })
  packageVersionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PackagesGetPackageVersionForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PackagesGetPackageVersionForUserPathParams;
}


export class PackagesGetPackageVersionForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  packageVersion?: shared.PackageVersion;
}
