import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagesGetPackageVersionForAuthenticatedUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_type" })
  packageType: shared.PackageTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_version_id" })
  packageVersionId: number;
}


export class PackagesGetPackageVersionForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackagesGetPackageVersionForAuthenticatedUserPathParams;
}


export class PackagesGetPackageVersionForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  packageVersion?: shared.PackageVersion;
}
